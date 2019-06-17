import React from 'react'
import {Helmet} from 'react-helmet'
import Header from 'components/CaseStudy/Header'
// import Context from 'components/CaseStudy/Context'
// import BrowserMockup from 'components/CaseStudy/BrowserMockup'
// import MobileMockup from 'components/CaseStudy/MobileMockup'
import {fwaste} from 'assets/images/images'

const Fwaste = props => (
  <section className="fwaste fade-in">
    <Helmet>
      <title>F Waste - Sarah Kirby | Developer & Designer Portfolio</title>
    </Helmet>

    <Header
      title="F Waste"
      img={fwaste.lx2}
      alt="testing atm"
    />

    <img src={fwaste.poster} alt="posters" />
  </section>
)

export default Fwaste