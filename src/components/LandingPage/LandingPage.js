import React from 'react'
import {me} from 'assets/images/images'

const LandingPage = props => (
  <section className="landing-page">
    <div className="landing-page-container">
      <div className="landing-page-text">
        <h1>
          <div className="transition-container">
            <span>Sarah&nbsp;</span>
          </div>
          <div className="transition-container">
            <span>Kirby</span>
          </div>
        </h1>

        <p>
          <b>Front-end developer&nbsp;</b>
          <br />
          and <b>designer</b> living&nbsp;
          <br />
          in <b>London.</b>
        </p>
      </div>
      
      <div className="img-block">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${me}, ${me} 2x`}
          />
          <source
            media="(min-width: 568px)"
            srcSet={`${me}, ${me} 2x`}
          />
          <img
            src={me}
            srcSet={`${me} 2x`}
            alt="iPad mockup with.."
          />
        </picture>
      </div>
    </div>
  </section>
)

export default LandingPage