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
  <span class="interact">click anywhere to make some bubbles</span>
  <h1>Hi, my name is <br><span class="highlight red">Ela Blechschmidt</span><br>
  <h2>I'm a <span class="highlight blue">software developer and UX engineer</span> based in Berlin</h2>
  <br>
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
</section>
  `
}


