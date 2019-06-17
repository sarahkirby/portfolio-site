import React from 'react'
import {Helmet} from 'react-helmet'
import Header from 'components/CaseStudy/Header'
// import Context from 'components/CaseStudy/Context'
// import BrowserMockup from 'components/CaseStudy/BrowserMockup'
// import MobileMockup from 'components/CaseStudy/MobileMockup'
import {bcito} from 'assets/images/images'

const Bcito = props => (
  <section className="bcito fade-in">
    <Helmet>
      <title>BCITO - Sarah Kirby | Developer & Designer Portfolio</title>
    </Helmet>

    <Header
      title="BCITO"
      img={bcito.lx5}
      alt="testing atm"
    />
  </section>
)

export default Bcito