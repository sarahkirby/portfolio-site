import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <section className="header">
    <div className="header-title">
      <h1>{props.title}</h1>
    </div>
    
    <div className="img-block">
      <div className="img"></div>
    </div>
  </section>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header