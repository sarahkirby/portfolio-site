import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import './index.scss'
import ScrollToTop from 'components/Helpers/ScrollToTop'
import App from 'pages/app'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Route path="/" component={App} />
    </ScrollToTop>
  </BrowserRouter>,
document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
