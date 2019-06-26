import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <div className="header">
    <div className="header-title">
      <h1 className="title">{props.title}</h1>
    </div>
    
    <div className="img-block">
      <img className="img" src={props.img} alt={props.alt} />
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header