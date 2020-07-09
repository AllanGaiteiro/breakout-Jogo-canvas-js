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
    var saindo = false
    var pause = false
    var dificuldade = 1
    var venceu = false
    //var characteres = []
    var blocos = []
    var contagemBlocos
    var qtdBloco
    var player
    var bola

    ////
    //var cor = ['chartreuse','blue','yellow','red','black']

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
        player.move(cnv,dificuldade)
        bola.movebola(cnv)
        colide(player, bola, blocos)
    }
    function score() {
        //alert(this.contador)
        if (bola.contador < 10) {
            value = `0${bola.contador}`
        } else {
            value = `${bola.contador}`
        }
        ctx2.clearRect(0, 0, cnv2.width, cnv2.height)
        ctx2.fillStyle = 'black'
        ctx2.font = "2rem serif"
        ctx2.fillText(`SCORE:`,cnv2.width/2-60, 30)
        ctx2.font = "bold 4rem serif"
        ctx2.fillText(value,cnv2.width/2-40, 100)
        ctx2.font = "2rem serif"
        ctx2.fillText(`nivel: ${dificuldade}`,10, 140)
        ctx2.fillText(`Faltam:`,cnv2.width/2-60, 250)
        ctx2.font = "bold  3rem serif"
        ctx2.fillText(`${contagemBlocos}`,cnv2.width/2-30, 300)
        ctx2.font = "2rem serif"
        ctx2.fillText(`vel/player:`,10, 340)
        ctx2.fillText(`${player.movSpeed}`,60, 380)
        ctx2.fillText(`vel/bola`,20, 420)
        ctx2.fillText(`${Math.abs(bola.dx)}`,50, 470)

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
        contagemBlocos = blocos.length
        for (let i = 0; i < blocos.length; i++) {
            let b = blocos[i]
            if (b.visible == false ) {
                contagemBlocos--
            }
            if(contagemBlocos == 0){
                venceu = true
            }
            
        }
        
        if (venceu) {
            alert('Você Venceu!!!')
            document.location.reload(true);
            //loadInicial()
        } else if (bola.y > cnv.height) {
            alert('Você Perdeu!!!')
            document.location.reload(true);
            //sair()
        } else if (saindo) {
            alert('Saindo!!!')
            saindo = true
            loadInicial()
        } else {
            atualizar()
            render()
            if (!pause) {
                requestAnimationFrame(loop)
            }else{
                //opcoes()
            }
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
        p.width = cnv.width/10
        p.height = 40
        var wid = cnv.width / p.width
        var het = 4
        qtdBloco = wid * het
        for (var i = 0; i < wid; i++) {
            p.x = p.width * i
            for (var j = 0; j < het; j++) {
                p.y = p.height * j
                p.visible = true
                p.life = 1 + corAleatoria()
                p.color = 'chartreuse'
                let char = new Blocos(p)
                blocos.push(char)
            }
            //alert(qtdBloco)
        }
    }
    function loadBola() {
        let p = info
        p.width = 20
        p.height = 20
        p.y = cnv.height - 150
        p.x = cnv.width / 2
        p.color = `rgb(${corAleatoria()},${corAleatoria()},${corAleatoria()})`
        let char = new Bola(p, dificuldade)
        bola = char
    }
    function loadPlayer() {
        let p = info
        p.x = cnv.width - 50
        p.y = cnv.height - 50
        p.width = 150
        p.height = 30
        p.color = 'blue'
        let char = new Player(info)
        //characteres.push(char)
        player = char
    }
    function corAleatoria() {
        if (dificuldade == 1.4) {
            return Math.round(Math.random() * 4)
        } else if (dificuldade == 1.2) {
            return Math.round(Math.random() * 3)
        } else {
            return Math.round(Math.random() * 2)
        }
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
    function comecar() {
        menu.Game.className = 'menuGame'
        pause = false
    }
    function inicio() {
        blocos = []
    
        ctx.clearRect(0,0,cnv.width,cnv.height)
        ctx2.clearRect(0,0,cnv2.width,cnv2.height)
        comecar()
        loadGame()
        loop()
    }
    function opcoes() {
        pause = true
        var visible
        var invisible
        if (menu.Game.className == 'menuInicial') {
            visible = 'block'
            invisible = 'none'
        }else if (menu.Game.className == 'menuGame'){
            visible = 'flex'
            invisible = 'none'
        }else{
            alert('erro')
        }
        
        menu.Game.style.display = invisible
        menu.opsMenu.style.display = 'block'
        menu.Opsoes.Volta.addEventListener('click', function () {

            
            pause = false
            menu.Game.style.display = visible
            menu.opsMenu.style.display = invisible
        if (menu.Game.className == 'menuGame') {
                loop()
            }
        })
        menu.Opsoes.Facil.addEventListener('click', function () {
            dificuldade = 1
            //alert(dificuldade)
        })
        menu.Opsoes.Medio.addEventListener('click', function () {
            dificuldade = 1.05
            //alert(dificuldade)
        })
        menu.Opsoes.Dificil.addEventListener('click', function () {
            dificuldade = 1.1
            //alert(dificuldade)
        })
    }
    function sair() {
        //saindo = true
        menu.Game.className = 'menuInicial'
        menu.Game.style.display = 'block'
        ctx.clearRect(0,0,cnv.width,cnv.height)
        ctx2.clearRect(0,0,cnv2.width,cnv2.height)
        pause = true
        blocos = []
        loadInicial()
    }
    function menuGame() {
        menu.Iniciar.addEventListener('click', inicio)
        menu.Opsoes.addEventListener('click', opcoes)
        menu.Sair.addEventListener('click', sair)
    }
    function loadInicial() {
        /// canvas e ctx 
        cnv = document.querySelector('.canvasJogo')
        cnv2 = document.querySelector('#painel')
        ctx = cnv.getContext('2d')
        ctx2 = cnv2.getContext('2d')
        cnv.width = 800
        cnv.height = 500
        cnv2.width = 200
        cnv2.height = 500
        //////////////////////////
        
        //menu
        menu.Game = document.querySelector('.menuInicial')
        //alert(menu.Game) // [object HTMLMenuElement]
        menu.Iniciar = document.querySelector('#iniciar')
        menu.Opsoes = document.querySelector('#opcoe')
        menu.Sair = document.querySelector('#sair')

        /////////////////////////

        //opsMenu
        menu.opsMenu = document.querySelector('.ops')
        let opsDifMenuId = 'opsDif_'
        menu.Opsoes.Volta = document.getElementById(opsDifMenuId + 'Volta')
        menu.Opsoes.Facil = document.getElementById(opsDifMenuId + 'Facil')
        menu.Opsoes.Medio = document.getElementById(opsDifMenuId + 'Medio')
        menu.Opsoes.Dificil = document.getElementById(opsDifMenuId + 'Dificil')

        menuGame()
    }
    window.addEventListener('load', loadInicial)
}())