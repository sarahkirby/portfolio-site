import React from "react"
import {Helmet} from 'react-helmet'
import {me} from 'assets/images/images'

const About = props => (
  <main className="about fade-in">
    <Helmet>
      <title>About - Sarah Kirby | Developer & Designer Portfolio</title>
      <meta name="description" content="Sarah Kirby is a front-end developer and designer from New Zealand living in London." />
    </Helmet>
    <div className="about-info container">
      <h1>Hello<span>.</span></h1>
      <p><b>I’m Sarah Kirby, a front-end developer and designer from New Zealand who has recently moved to London.</b></p>
      <p>A creative at heart, I studied design for three years and went on to study web development. This is where I found my sweet spot, being creative in a technical way.</p>

      <p>I have been lucky enough to work for both large and small companies, using modern front-end technologies such as React, Sass, Less.</p>
      <div>
        <a href="/about" className="btn">
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
