import React from "react"
import {Helmet} from 'react-helmet'
import {me} from 'assets/images/images'
import cv from 'assets/sarahkirby-cv.pdf'

const About = props => (
  <main className="about fade-in site-bgc">
    <Helmet>
      <title>About - Sarah Kirby | Developer & Designer Portfolio</title>
      <meta name="description" content="Sarah Kirby is a front-end developer and designer from New Zealand living in London." />
    </Helmet>
    <div className="about-info">
      <h1>Hello<span>.</span></h1>
      <p><b>I’m Sarah Kirby, a front-end developer and designer from New Zealand who has recently moved to London.</b></p>
      <p>A creative at heart, I studied design for three years and went on to study web development. This is where I found my place, being creative in a technical way.</p>

      <p>I'm currently looking for opportunities where I can further develop my skills in modern web technologies such as React & Sass, and help build beautiful, interactive, user-centered applications.</p>
      <div>
        <a
          href={cv}
          download="Sarah Kirby Curriculum Vitae"
          className="link"
        >
          Curriculum Vitae <i className="fas fa-download"></i>
        </a>
      </div>
    </div>

    <div className="about-visual">
      <img src={me} alt="Moody studio photograph of Sarah Kirby" />
    </div>
    
  </main>
)

export default About
