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
    <section>
        <div id="home">
            <h1>Hi, my name is <br><span class="highlight red">Ela</span><br></h1>
            <h2>I'm a <span class="highlight blue">software developer and UX engineer</span> living in Berlin.</h2>
        </div>
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
        <br>
            <h2>Projects</h2>
            <h3>Blockparty</h3>
            <h4>A secure Scuttlebutt client for building your own decentralized social network</h4>
            <p><a href="https://www.scuttlebutt.nz">Scuttlebutt</a> is a decentralized social network that functions completely peer-to-peer. 
            It is possible to create lots of different networks for different groups and purposes, but that process requires a bit of technical skill - 
            blockparty addresses this by making it easy to set up a new network and invite people to it. It's also a cool client for any Scuttlebutt network.</p>
                <div class="project-links">   
                    <a target="_blank" href="https://github.com/blockparty-ssb">
                        <i class="fab fa-github"></i>
                        Repo
                    </a>
                    <a target="_blank" href="https://blockparty-ssb.github.io">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                        Website
                    </a>
                </div>
        </div>
    </section>
  `
}


