(function () {
    //teste 01: verificar caminho
    //alert('teste 01')
    /////////////////////////////////


    //teste 02: verificar escopo variaveis.

    //var test = 'teste 02'
    //alert(test)
    ///////////////////////////////

    //texte 03: verificar carregamento do DOM.

    // modo incorreto
    //var body = document.querySelector('body')
    //body.innerText = 'teste 03'

    //modo Correto
    //function teste03() {
    //var body = document.querySelector('body')
    //body.innerText = 'teste 03'
    //}
    //window.addEventListener('load', teste03)
    //////////////////////////////

    ///// Começo Codigo ////

    ///declaraçao
    var cnv
    var ctx
    var menu = []
    var dificuldade = 1
    //var characteres = []
    var blocos = []
    var player
    var bola
    var info = { x: 0, y: 0, width: 0, height: 0, color: ' ' }
    var //w = 87,
        //s = 83,
        a = 65,
        d = 68
    var //cima = 38,
        //baixo = 40,
        esq = 37,
        dir = 39
    ////////////// fim do loop //////////////////////
    function atualizar() {
        player.move(cnv)
        bola.movebola(cnv)
        colide(player, bola, blocos)
    }
    function score() {
        //alert(this.contador)
        ctx.font = "2rem serif"
        if (bola.contador < 10) {
            value = `SCORE: 0${bola.contador}`
        } else {
            value = `SCORE: ${bola.contador}`
        }
        ctx.fillStyle = 'blue'
        ctx.fillText(`${value}`, cnv.width - 150, 35)
    }
    function render() {
        ctx.save()
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        //////player
        player.draw(ctx)
        ///// bola 
        bola.draw(ctx)
        for (var i in blocos) {
            blocos[i].draw(ctx)
        }
        ctx.restore()
        score()
    }
    ////////////// fim do loop //////////////////////

    ////////////// Carregamento Jogo ////////////////////
    function loop() {
        if (bola.contador == 64) {
            alert('Você Venceu!!!')
            loadInicial()
        } else if (bola.y > cnv.height) {
            alert('Você Perdeu!!!')
            loadInicial()
        } else {
            atualizar()
            render()
            requestAnimationFrame(loop)
        }
    }
    function loadMove() {
        ///// centralizar a camera 
        window.addEventListener('keydown', function () {
            let tecl = event.keyCode
            //this.alert(tecl)
            /*if (tecl == w || tecl == cima) {
                player.movCim = true
            }
            if (tecl == s || tecl == baixo) {
                player.movBax = true
            }
            */if (tecl == a || tecl == esq) {
                player.movEsq = true
            }
            if (tecl == d || tecl == dir) {
                player.movDir = true
            }
        })
        window.addEventListener('keyup', function () {
            let tecl = event.keyCode
            //this.alert(tecl)
            /*if (tecl == w || tecl == cima) {
                player.movCim = false
            }
            if (tecl == s || tecl == baixo) {
                player.movBax = false
            }
            */if (tecl == a || tecl == esq) {
                player.movEsq = false
            }
            if (tecl == d || tecl == dir) {
                player.movDir = false
            }
        })
    }
    function loadBlocos() {
        var p = info
        p.width = 50
        p.height = 50
        var wid = cnv.width / p.width
        var het = (cnv.height / 3) / p.height
        for (var i = 0; i < wid; i++) {
            p.x = p.width * i
            for (var j = 0; j < het; j++) {
                p.y = p.height * j
                p.color = `rgb(${corAleatoria()},${corAleatoria()},${corAleatoria()})`
                let char = new Blocos(p)
                blocos.push(char)
            }


        }
    }
    function loadBola() {
        let p = info
        p.width = 20
        p.height = 20
        p.y = 250
        p.x = 300
        p.color = `rgb(${corAleatoria()},${corAleatoria()},${corAleatoria()})`
        let char = new Bola(p, dificuldade)
        bola = char
    }
    function loadPlayer() {
        let p = info
        p.x = 400 - 75
        p.y = 600 - 75
        p.width = 150
        p.height = 50
        p.color = 'blue'
        let char = new Player(info)
        //characteres.push(char)
        player = char
    }
    function corAleatoria() {
        return Math.round(Math.random() * 255)
    }
    ////////////// Fima Carregamento Jogo ////////////////////
    function loadGame() {
        //Carregar movimentaçao
        loadMove()
        //Declaraçao e Carregamento Characteres 
        loadPlayer()
        loadBlocos()
        loadBola()
    }
    function inicio() {
        loadGame()
        loop()
    }
    function dificult(n) {
        dificuldade = n
    }
    function opcoes() {
        menu.Game.style.display = 'none'
        menu.opsMenu.style.display = 'block'

        menu.Opsoes.Volta.addEventListener('click', function () {
            menu.Game.style.display = 'block'
            menu.opsMenu.style.display = 'none'
        })
        menu.Opsoes.Facil.addEventListener('click', dificult(1))
        menu.Opsoes.Medio.addEventListener('click', dificult(2))
        menu.Opsoes.Dificil.addEventListener('click', dificult(3))
    }
    function menuGame() {
        menu.Iniciar.addEventListener('click', inicio)
        menu.Opsoes.addEventListener('click', opcoes)
    }

    function loadInicial() {
        /// canvas e ctx 
        cnv = document.querySelector('canvas')
        ctx = cnv.getContext('2d')
        cnv.width = 800
        cnv.height = 600
        //////////////////////////

        //menu
        menu.Game = document.getElementById('menuGame')
        //alert(menu.Game) // [object HTMLMenuElement]
        let textIdMenu = 'menuGame_'
        menu.Iniciar = document.getElementById(textIdMenu + 'Iniciar')
        menu.Opsoes = document.getElementById(textIdMenu + 'Opsoe')
        menu.Sair = document.getElementById(textIdMenu + 'Sair')

        /////////////////////////

        //opsMenu
        menu.opsMenu = document.getElementById('opsMenu')
        menu.opsMenu.style.display = 'none'
        let opsDifMenuId = 'opsDif_'
        menu.Opsoes.Volta = document.getElementById(opsDifMenuId + 'Volta')
        menu.Opsoes.Facil = document.getElementById(opsDifMenuId + 'Facil')
        menu.Opsoes.Medio = document.getElementById(opsDifMenuId + 'Medio')
        menu.Opsoes.Dificil = document.getElementById(opsDifMenuId + 'Dificil')

        //teste 04: verificaçao do ctx

        //alert(ctx) // tenq ser igual a: [object CanvasRenderingContext2D]
        /////////////////////////

        //teste 05: verificar renderizaçao do ctx

        //ctx.fillStyle = 'blue'
        //ctx.fillRect(0,0,cnv.width,cnv.height)
        /////////////////////

        //teste 06: verificar os cpmponentes menu

        //alert(menu.Opcoes.innerText)
        //////////////////////
        menuGame()
    }
    window.addEventListener('load', loadInicial)
}())
//teste 02: verificar escopo variaveis
//alert(test) // variaveis fora nao acessam as de dentro