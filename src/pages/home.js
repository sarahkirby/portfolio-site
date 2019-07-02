import React from 'react'
import {Helmet} from 'react-helmet'
import {CSSTransition} from 'react-transition-group'
import LandingPage from 'components/LandingPage/LandingPage'
import Works from 'components/Works/Works'

const Home = props => (
  <div className="home fade-in">
    <Helmet>
      <title>Sarah Kirby | Developer & Designer Portfolio</title>
      <meta name="description" content="Sarah Kirby is a front-end developer and designer from New Zealand living in London. She is on the look out for a creative front-end developer role, ideally working with JS frameworks such as React." />
    </Helmet>

    <CSSTransition
      in={true}
      timeout={500}
      classNames="pageload-transition"
      unmountOnExit
      appear
    >
      <LandingPage />
    </CSSTransition>

    <Works />
  </div>
)

export default Home
