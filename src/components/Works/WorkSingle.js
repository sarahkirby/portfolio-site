import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const WorkSingle = props => (
  <Link
    to={props.link}
    className={`work ${props.class}`}
  >
    <div className="work-text">
      <h1 className="title">
        {props.title}
      </h1>
      <span className="line"/>
      <h6 className="subtitle">
        View work
      </h6>
    </div>

    <div className="work-img">
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
  </Link>
)

WorkSingle.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSx1: PropTypes.string,
  imgSx2: PropTypes.string,
  imgMx1: PropTypes.string,
  imgMx2: PropTypes.string,
  imgLx1: PropTypes.string,
  imgLx2: PropTypes.string,
  alt: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
}

export default WorkSingle