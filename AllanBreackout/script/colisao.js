

function colide(player, bola, blocos) {
    colidPlayer(bola, player)
    colidBlock(bola, blocos)
}
function colidPlayer(bola, player) {
    let a = bola
    let b = player

    /// codigo curto // em progresso
    let colidX = (a.y + (a.width) > b.y) ? true : false;
    let colidY = (a.x + (a.width) > b.x && a.x - (a.width) < b.x + b.width) ? true : false;

    if (colidX && colidY) {
        if (a.dx > 0) {
            if (a.x < b.x + b.width / 3) {

                a.dx = (a.dx + 2.5) / 2
                a.dy =  7.5
                //a.dx *= -1

            }
            if (a.x > b.x + ((b.width / 3) * 2)) {
                a.dx = (a.dx + 2.5) / 2
                a.dy = 7.5
            } else {
                a.dx = 5
                a.dy = 5
            }

        } else {
            if (a.x < b.x + b.width / 3) {
                a.dx = (a.dx + -2.5) / 2
                a.dy = 7.5
            }
            if (a.x > b.x + ((b.width / 3) * 2)) {

                a.dx = (a.dx + -2.5) / 2
                a.dy = 7.5
                //a.dx *= -1
            } else {
                a.dx = -5
                a.dy = 5
            }
        }
        a.dy *= -1
    }

}


function colidBlock(bola, blocos) {

    for (var i = 0; i < blocos.length; i++) {
        let bloc = blocos[i]
        if (bloc.visible) {
            let a = bola
            let b = bloc
            /////////////////////////////////////////

            let difX = a.x - b.centerX()
            let difY = a.y - b.centerY()
            let somaWidth = a.width + b.halfWidth()
            let somaHeight = a.height + b.halfHeight()
            // colizao é quando a posisao do objeto mais metade de sua (largura\tamanho sao iguais ou menos a posiçao do objeto que sera afetado e metade de sua (largura\altura)
            //parametro colizao x
            let colizaoX = Math.abs(difX) < somaWidth ? true : false
            //parametro colizao y 
            let colizaoY = Math.abs(difY) < somaHeight ? true : false

            if (colizaoX && colizaoY) {
                let colidX = somaWidth - Math.abs(difX)
                let colidY = somaHeight - Math.abs(difY)
                /// texte dano
                if (colidX > colidY) {
                    a.dy *= -1
                } else {
                    a.dx *= -1
                }
                b.life--
                b.lifeBlock()

                //b.visible = b.life == 0 ? false : true
                if (b.visible == false) {
                    a.count()
                    a.dx *= 1.01
                    a.dy *= 1.01
                }
            }
        }
    }
}

