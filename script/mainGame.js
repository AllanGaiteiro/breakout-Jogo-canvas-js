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
    var dificuldade
    var characteres = []
    var blocos = []
    var player
    var playerInfo = { x: 400-75, y: 600-100, width: 150, height: 50, color: 'blue' }
    var w = 87, s = 83, a = 65, d = 68
    var cima = 38, baixo = 40, esq = 37, dir = 39

    function atualizar() {
        player.Move()
    }
    function render() {
        ctx.save()
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        let p = player
        //alert(c.color)
        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, p.width, p.height)
        for (var i in blocos) {
            let b = blocos[i]
            //alert(b.color)
            //alert(c.color)
            ctx.fillStyle = b.color
            ctx.fillRect(b.x, b.y, b.width, b.height)
        }
        ctx.restore()
    }

    function loop() {
        atualizar()
        render()
        requestAnimationFrame(loop)
    }
    function loadMove() {
        ///// centralizar a camera 
        window.addEventListener('keydown', function () {
            let tecl = event.keyCode
            //this.alert(tecl)
            if (tecl == w || tecl == cima) {
                player.movCim = true
            }
            if (tecl == s || tecl == baixo) {
                player.movBax = true
            }
            if (tecl == a || tecl == esq) {
                player.movEsq = true
            }
            if (tecl == d || tecl == dir) {
                player.movDir = true
            }
        })
        window.addEventListener('keyup', function () {
            let tecl = event.keyCode
            //this.alert(tecl)
            if (tecl == w || tecl == cima) {
                player.movCim = false
            }
            if (tecl == s || tecl == baixo) {
                player.movBax = false
            }
            if (tecl == a || tecl == esq) {
                player.movEsq = false
            }
            if (tecl == d || tecl == dir) {
                player.movDir = false
            }
        })
    }

    function loadBlocos() {
        var p = playerInfo
        p.width = 50
        p.height = 50
        var wid = cnv.width/p.width
        var het = (cnv.height/3)/p.height
        for (var i = 0; i < wid; i++) {
            p.x = p.width * i
            for (var j = 0; j < het; j++) {

                
                p.y = p.height * j
                p.color = `rgb(${corAleatoria()},${corAleatoria()},${corAleatoria()})`
                let char = new Player(p)//new Bola(p)
                characteres.push(char)
                blocos.push(char)
            }

        }
    }
    function corAleatoria() {
        return Math.round(Math.random() * 255)
    }
    function loadGame() {
        //Declaraçao do Player
        let char = new Player(playerInfo)
        characteres.push(char)
        player = char
        loadMove()
        loadBlocos()
        //Declaraçao do bola
        /*
        let char = new Bola()
        characteres.push(char)
        bola = char
        */



    }

    function inicio() {
        loadGame()
        loop()
    }

    function opcoes() {
        menu.Game.style.display = 'none'
        menu.opsMenu.style.display = 'block'
        menu.Opsoes.Volta.addEventListener('click', function () {
            menu.Game.style.display = 'block'
            menu.opsMenu.style.display = 'none'
        })
        menu.Opsoes.Facil.addEventListener('click', function () {
            dificuldade = 1
        })
        menu.Opsoes.Medio.addEventListener('click', function () {
            dificuldade = 2
        })
        menu.Opsoes.Dificil.addEventListener('click', function () {
            dificuldade = 3
        })

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





