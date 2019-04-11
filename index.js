/* eslint-disable max-len */
'use strict'

const html = require('choo/html')
const choo = require('choo')
const drawCanvas = require('./draw-canvas')

const canvas = document.querySelector('canvas')

const app = choo()
app.route('/:user', home)
app.mount('section')

drawCanvas(canvas)


function home () {
  return html`
  <section id="home">
  <h1>Hi, my name is <br><span class="highlight red">Ela</span><br></h1>
  <h2>I'm a <span class="highlight blue">software developer and UX engineer</span> living in Berlin. </h2>
  <div class="social-links">
      <a class="email" href="mailto:ela@posteo.de">
          <span class="fas fa-envelope"></span>
      </a>
      <a target="_blank" href="https://github.com/prpella">
          <i class="fab fa-github"></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/manuelablechschmidt/">
          <i class="fab fa-linkedin"></i>
      </a>
  </div>
      <p class="about">I like crafting user friendly websites and applications <span class="highlight blue">with Node.js, Javascript, CSS and HTML </span>. I love working in an friendly and diverse environment preferably in pair programming mode.</p>
  <div id="projects">
  </div>
  <div id="contact">
  </div>
  
</section>
  `
}


