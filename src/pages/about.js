import React from "react"
import {Helmet} from 'react-helmet'
import {me} from 'assets/images/images'
import cv from 'assets/sarahkirby-cv.pdf'

const About = props => (
  <main className="About fade-in site-bgc">
    <Helmet>
      <title>About - Sarah Kirby | Developer & Designer Portfolio</title>
      <meta name="description" content="Sarah Kirby is a front-end developer and designer from New Zealand living in London." />
    </Helmet>
    <div className="About__content">
      <h1 className="About__title">Hello<span className="gold">.</span></h1>
      <p className="About__info"><b>I’m Sarah Kirby, a front-end developer and designer from New Zealand who has recently moved to London.</b></p>
      <p className="About__info">A creative at heart, I studied design for three years and went on to study web development. This is where I found my place, being creative in a technical way.</p>

      <p className="About__info">I'm currently looking for opportunities where I can further develop my skills in modern web technologies such as React & Sass, and help build beautiful, interactive, user-centered applications.</p>
      <div>
        <a
          href={cv}
          download="Sarah Kirby Curriculum Vitae"
          className="About__link link"
        >
          Curriculum Vitae <i className="fas fa-download About__linkicon"></i>
        </a>
      </div>
    </div>

    <div className="About__visual">
      <img
        src={me}
        alt="Moody studio photograph of Sarah Kirby"
        className="About__img"
      />
    </div>
    
  </main>
)

export default About
