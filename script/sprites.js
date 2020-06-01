

var Characteres = function (c) {
    this.x = c.x
    this.y = c.y
    this.width = c.width
    this.height = c.height
    this.color = c.color
}
/*
Characteres.prototype.Draw = function (ctx){
    ctx.fillStyle = 'blue'
    ctx.fillRect(0,0,this.width,this.height)
}
*/



var Player = function (c) {
    Characteres.call(this, c)
    this.movCim = this.movBax = this.movDir = this.movEsq = false
}
Player.prototype = Object.create(Characteres.prototype)
Player.prototype.Move = function () {

    this.movSpeed = 1
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

}
