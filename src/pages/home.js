import React from 'react'
import {Helmet} from 'react-helmet'
import LandingPage from 'components/LandingPage/LandingPage'
import Works from 'components/Works/Works'

const Home = props => (
  <div className="fade-in">
    <Helmet>
      <title>Sarah Kirby | Developer & Designer Portfolio</title>
      <meta name="description" content="Sarah Kirby is a front-end developer and designer from New Zealand living in London. She is on the look out for a creative front-end developer role, ideally working with JS frameworks such as React." />
    </Helmet>

    <LandingPage />
    <Works />
  </div>
)

export default Home
