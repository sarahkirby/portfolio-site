import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const WorkSingle = props => (
  <Link
    to={props.link}
    className={`Work ${props.class}`}
  >
    <div className="Work__content">
      <h1 className="Work__title title">
        {props.title}
      </h1>
      <span className="Work__line"/>
      <h6 className="Work__subtitle subtitle">
        View work
      </h6>
    </div>

    <div className="Work__visual block__visual">
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
          className="Work__img"
          alt={props.alt}
        />
      </picture>
    </div>
  </Link>
)

WorkSingle.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSx1: PropTypes.string,
  imgSx2: PropTypes.string,
  imgMx1: PropTypes.string,
  imgLx1: PropTypes.string,
  imgLx2: PropTypes.string,
  alt: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
}

export default WorkSingle