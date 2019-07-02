import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Nav from 'components/Nav/Nav'
import Home from 'pages/home'
import About from 'pages/about'
import Works from 'components/Works/Works'
import Enrichme from 'pages/works/enrichme'
import Fwaste from 'pages/works/fwaste'
import Bcito from 'pages/works/bcito'
// import Footer from 'components/Footer/Footer'
import Error from 'pages/error'

const App = props => {
  const bgColor = ['#3f8fa8', '#0066cc', '#dd4359', '#e7ebee', '#d4dde6']
  const randomBgColor = bgColor[Math.floor(Math.random() * bgColor.length)]

  return (
    <div className={`app ${props.location.pathname === '/about' ? 'about-page' : ''}`}>
      <Nav />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={2000}
          classNames="fade"
        >
          <div className="route-transition">
            <div className="route-transition-animation" style={{backgroundColor: randomBgColor}} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Works} />
              <Route path="/enrichme" component={Enrichme} />
              <Route path="/fwaste" component={Fwaste} />
              <Route path="/bcito" component={Bcito} />
              <Route component={Error} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
