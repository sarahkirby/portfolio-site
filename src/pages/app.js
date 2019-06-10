import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Nav from 'components/Nav/Nav'
import Home from 'pages/home'
import About from 'pages/about'
import Works from 'components/Works/Works'
import Enrichme from 'components/Enrichme/Enrichme'
import Footer from 'components/Footer/Footer'
import Error from 'pages/error'

const App = props => (
  <div className="app">
    <Nav />
    <TransitionGroup>
      <CSSTransition
        key={props.location.key}
        timeout={2000}
        classNames="fade"
      >
        <div className="route-transition">
          <div className="route-transition-animation" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Works} />
            <Route path="/enrichme" component={Enrichme} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default App
