'use strict'

module.exports = function (canvas) {
  const c = canvas.getContext('2d')
  var circleArray = []


  canvas.addEventListener('click', function(event) {
    const mousePosition = getMousePosition(canvas, event)
    const x = mousePosition.x
    const y = mousePosition.y
    for (var i = 0; i < 5; i++) {
      makeBall(x, y)
    }
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
    const radius = Math.random() * 50
    const dx = (Math.random() - 0.2)
    const dy = (Math.random() - 0.2)
    // eslint-disable-next-line max-len
    // const colorArray = ['rgba(194, 194, 214, 0.72)', 'rgba(211, 248, 226, 0.72)', 'rgba(228, 193, 249, 0.72)', 'rgba(237, 231, 177, 0.72)', 'rgba(169, 222, 249, 0.72)']
    const colorArray = ['rgba(227, 134, 186, 0.7)', 'rgba(156, 136, 244, 0.7)', 'rgba(149, 229, 206, 0.7)', 'rgba(153, 182, 239, 0.7)']
    const color = colorArray[Math.floor(Math.random() * colorArray.length)]
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
    const rect = canvas.getBoundingClientRect()
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  }
}
