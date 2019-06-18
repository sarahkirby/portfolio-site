import React from 'react'
import PropTypes from 'prop-types'

const Description = props => (
  <div className="description container">
    <div className={`description-text ${props.customClass ? props.customClass : ''}`}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>

    {props.children}
  </div>
)

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  children: PropTypes.node
}

export default Description