
function colide(player,blocos) {
    for(var i in blocos){
        let b = blocos[i] 
        if(b.visible){
            alert(b.centerX())
            var verifX = player.centerX() - b.centerX()
            var verifY = player.centerY() - b.centerY()
            
        }
    }
}