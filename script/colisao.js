

function colide(player, bola, blocos) {
    colidPlayer( bola, player)
    colidBlock(bola, blocos)
}
function colidPlayer( bola, player) {
    let a = bola
    let b = player
    let difX = a.centerX() - b.centerX()
    let difY = a.centerY() - b.centerY()
    let somaWidth = a.halfWidth() + b.halfWidth()
    let somaHeight = a.halfHeight() + a.halfHeight()
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
        
    }
}


function colidBlock(bola, blocos) {

    for (var i = 0; i < blocos.length; i++) {
        let bloc = blocos[i]
        if (bloc.visible) {
            let a = bola
            let b = bloc
            let difX = a.centerX() - b.centerX()
            let difY = a.centerY() - b.centerY()
            let somaWidth = a.halfWidth() + b.halfWidth()
            let somaHeight = a.halfHeight() + a.halfHeight()
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
                b.visible = falsed
            }

        }


    }
}




/*
    de outro projeto// desejo reestudar este esquema
function colide(player,blocos) {

    for(var i = 0;i < blocos.length; i++){
        let b = blocos[i]
        if(b.visible){
            let difX = player.centerX() - b.centerX()
            let difY = player.centerY() - b.centerY()
            let somaWidth = player.halfWidth() + b.halfWidth() // soma das metades X
        let somaHeight = player.halfHeight() + b.halfHeight()  // soma das metades Y

            // colizao é quando a posisao do objeto mais metade de sua (largura\tamanho sao iguais ou menos a posiçao do objeto que sera afetado e metade de sua (largura\altura)

            if (Math.abs(difX) < somaWidth && Math.abs(difY) < somaHeight) {
                let colidX = somaWidth - Math.abs(difX)
                let colidY = somaHeight - Math.abs(difY)
                /// texte dano

                if (colidX > colidY) {

                    if (difY > 0) {
                        player.y += colidY
                    } else {
                        player.y -= colidY
                    }
                } else {

                    if (difX > 0) {
                        player.x += colidX

                    } else {
                        player.x -= colidX

                    }


                }
            }
        }
    }
}*/