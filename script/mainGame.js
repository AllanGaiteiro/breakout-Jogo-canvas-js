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

    function atualizar() {

    }
    function render() {

    }

    function loop() {
        atualizar()
        render()
        requestAnimationFrame(loop)
    }

    function loadGame(){
        
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





