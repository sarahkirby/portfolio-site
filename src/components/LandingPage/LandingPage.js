import React from 'react'
import {coverSx1, coverSx2, coverMx1, coverMx2, coverLx1, coverLx2} from 'assets/images/images'

const LandingPage = props => (
  <section className="landing-page">
    <div className="landing-page-text">
      <h1>Sarah Kirby</h1>
      <p><b>Front-end developer</b> and <b>designer</b> living in <b>London.</b></p>
    </div>
    
    <div className="img-block">
      <div className="img">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${coverLx1}, ${coverLx2} 2x`}
        />
        <source
          media="(min-width: 568px)"
          srcSet={`${coverMx1}, ${coverMx2} 2x`}
        />
        <img
          src={coverSx1}
          srcSet={`${coverSx2} 2x`}
          alt="iPad mockup with.."
        />
      </picture>
      </div>
    </div>
  </section>
)

export default LandingPage