import React from 'react'
import PropTypes from 'prop-types'

const Description = props => (
  <div className={`description container ${props.customClass ? props.customClass : ''}`}>
    <div className="description-text">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>

    {props.children &&
      <div className="description-img">
        {props.children}
      </div>
    }
  </div>
)

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  children: PropTypes.node
}

export default Description