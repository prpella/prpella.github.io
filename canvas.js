'use strict'


const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

var circleArray = []

canvas.addEventListener('click', function(event) {
    var mousePosition = getMousePosition(canvas, event)
    var x = mousePosition.x
    var y = mousePosition.y
    console.log(x + ',' + y)
    makeBall(x, y)
}, false)

function makeBall (x, y) {
    var radius = Math.random() * 50
    //var x = Math.random() * (innerWidth - radius * 2) + radius
    //var y = Math.random() * (innerHeight - radius * 2) + radius
    var dx = (Math.random() - 0.5)
    var dy = (Math.random() - 0.5)
    var colorArray = ['#D79922', '#EFE2BA', '#F13C20', '#4056A1', '#C5CBE3']
    // var colorArray = ['#E27D60', '#85DCB', '#E8A87C', '#C38D9E', '#41B3A3']
    var color = colorArray[Math.floor(Math.random() * colorArray.length)]
    circleArray.push(new Circle(x, y, dx, dy, radius, color))
}

function Circle(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
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

function animate() { 
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate()
   

//Get Mouse Position
function getMousePosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}