import React from "react"
import {Route, Switch} from "react-router-dom"
import Nav from "components/Nav/Nav"
import Home from "pages/home"
import About from "pages/about"
import Error from "pages/error"

const App = props => (
  <div className="app">
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route component={Error} />
    </Switch>
  </div>
)

export default App
