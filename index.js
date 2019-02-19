/* eslint-disable max-len */
'use strict'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var circleArray = []

canvas.addEventListener('click', function(event) {
  console.log('clock')
  var mousePosition = getMousePosition(canvas, event)
  var x = mousePosition.x
  var y = mousePosition.y
  makeBall(x, y)
}, false)

initialize()

function initialize() {
  window.addEventListener('resize', resizeCanvas, false)
  resizeCanvas()
}

function redraw() {
  c.strokeRect(0, 0, window.innerWidth, window.innerHeight)
}

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  redraw()
}

function makeBall (x, y) {
  var radius = Math.random() * 50
  // var x = Math.random() * (innerWidth - radius * 2) + radius
  // var y = Math.random() * (innerHeight - radius * 2) + radius
  var dx = (Math.random() - 0.2)
  var dy = (Math.random() - 0.2)
  // var colorArray = ['#D79922', '#EFE2BA', '#F13C20', '#4056A1', '#C5CBE3']
  var colorArray = ['rgba(216, 152, 34, 0.51)', 'rgba(239, 225, 185, 0.51)', 'rgba(241, 62, 34, 0.51)', 'rgba(64, 86, 160, 0.53)', 'rgba(196, 203, 227, 0.52)', 'rgba(245, 117, 97, 0.67)']
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

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()

function getMousePosition(canvas, event) {
  var rect = canvas.getBoundingClientRect()
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}
