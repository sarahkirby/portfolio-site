import React from 'react'
import {Helmet} from 'react-helmet'
import LandingPage from 'components/LandingPage/LandingPage'
import Works from 'components/Works/Works'

const Home = props => (
  <div className="fade-in">
    <Helmet>
      <title>Sarah Kirby | Developer & Designer Portfolio</title>
    </Helmet>

    <LandingPage />
    <Works />
  </div>
)

export default Home
