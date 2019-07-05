import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <div className="header">
    <div className="header-title">
      <h1 className="title">{props.title}</h1>
    </div>
    
    <div className="img-block">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${props.imgLx1}, ${props.imgLx2} 2x`}
        />
        <source
          media="(min-width: 568px)"
          srcSet={`${props.imgMx1}, ${props.imgLx1} 2x`}
        />
        <img
          src={props.imgSx1}
          srcSet={`${props.imgSx2} 2x`}
          className="img"
          alt={props.alt}
        />
      </picture>
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header