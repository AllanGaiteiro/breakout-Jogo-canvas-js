
var Characteres = function (c) {
    this.x = c.x
    this.y = c.y
    this.width = c.width
    this.height = c.height
    this.color = c.color
}
Characteres.prototype.draw = function (ctx) {
    //alert(c.color)

    if ((this.player || this.blok) && this.visible) {
        ctx.strokeStyle = 'black'
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        
    } else if (this.bola) {
        //alert(img)
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI, true)
        ctx.fill()
        ctx.stroke()

    }

}
Characteres.prototype.halfHeight = function () {
    return this.height / 2
}
Characteres.prototype.halfWidth = function () {
    return this.width / 2
}
Characteres.prototype.centerX = function () {
    return this.x + this.halfWidth()
}
Characteres.prototype.centerY = function () {
    return this.y + this.halfHeight()
}
// jogador 
var Player = function (c) {
    Characteres.call(this, c)
    this.visible = true
    this.player = true
    this.movCim = this.movBax = this.movDir = this.movEsq = false
}
Player.prototype = Object.create(Characteres.prototype)

Player.prototype.move = function (cnv,d) {

    this.movSpeed = 10*d
    ///this.movement 
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
    this.blok = true
    this.visible = true
    this.life = c.life
    this.lifeBlock()

}
Blocos.prototype = Object.create(Characteres.prototype)

Blocos.prototype.lifeBlock = function () {
    switch (this.life) {
        case 5:
            this.color = 'black'
            break;
        case 4:
            this.color = 'red'
            break;
        case 3:
            this.color = 'yellow'
            break;
        case 2:
            this.color = 'blue'
            break;
        case 1:
            this.color = 'chartreuse'
            break;
        case 0:
            this.visible = false
            break;
    }

}

// bola
var Bola = function (c, d) {
    Characteres.call(this, c)
    this.bola = true
    this.visible = true
    this.contador = 0
    //alert('texte')
    this.gravit = 3 * d
    //alert(d)
    this.dx = this.gravit
    this.dy = -this.gravit
}
Bola.prototype = Object.create(Characteres.prototype)
Bola.prototype.movebola = function (cnv) {

    this.dx = this.x <= this.width || this.x >= cnv.width - this.width ? this.dx *= -1 : this.dx *= 1

    this.dy = this.y <= this.height ? this.dy *= -1 : this.dy *= 1

    this.x += this.dx
    this.y += this.dy

}
Bola.prototype.count = function () {
    this.contador++
}