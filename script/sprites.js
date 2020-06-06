

var Characteres = function (c) {
    this.x = c.x
    this.y = c.y
    this.width = c.width
    this.height = c.height
    this.color = c.color
}
Characteres.prototype.draw = function (ctx){
            //alert(c.color)
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
}
Characteres.prototype.halfHeight = function (){
    return this.height / 2
}
Characteres.prototype.halfWidth = function (){
    return this.width / 2
}
Characteres.prototype.centerX = function (){
    return this.x + this.halfWidth()
}
Characteres.prototype.centerY = function (){
    return this.y + this.halfHeight()
}


// jogador 
var Player = function (c) {
    Characteres.call(this, c)
    this.movCim = this.movBax = this.movDir = this.movEsq = false
}
Player.prototype = Object.create(Characteres.prototype)

Player.prototype.Move = function (cnv) {

    this.movSpeed = 5
    this.movement
    ////mover-se
    if (this.movCim) {
        this.y += this.movSpeed * -1
    }
    if (this.movBax) {
        this.y += this.movSpeed
    }
    if (this.movDir) {
        this.x += this.movSpeed 
    }
    if (this.movEsq) {
        this.x += this.movSpeed * -1
    }
    this.x = Math.max(0, Math.min(cnv.width - this.width, this.x))
    this.y = Math.max(0, Math.min(cnv.height - this.height, this.y))


}
// blocos 
var Blocos = function (c) {
    Characteres.call(this, c)
    this.visible = true

}
Blocos.prototype = Object.create(Characteres.prototype)
// bola
var Bola = function (c,dificuldade) {
    Characteres.call(this, c)
    this.bola = true
    this.gravit = 3 * dificuldade
    this.y += this.gravit
    //alert('texte')

}
Bola.prototype = Object.create(Characteres.prototype)
Bola.prototype.movebola = function (){
    this.dx = this.gravit
    this.dy = this.gravit
    this.x += this.dx
    this.y += this.dy
    /*this.dx = this.x <= 0 ||  this.x >= cnv.width ? this.dx *= -1 : this.dx*= 1*/
}
