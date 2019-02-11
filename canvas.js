'use strict'

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        const color = 'rgba(157, 148, 27, 0.44)'
        c.fillStyle = color
        c.fill()
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
    
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}



var circleArray = []

for (var i = 0; i < 100; i++) {
    circleArray.push(new Circle(x, y, dx, dy, radius))
    var radius = Math.random() * 50
    var x = Math.random() * (innerWidth - radius * 2) + radius
    var y = Math.random() * (innerHeight - radius * 2) + radius
    var dx = (Math.random() - 0.5)
    var dy = (Math.random() - 0.5)

}

function animate() { //loop
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate()