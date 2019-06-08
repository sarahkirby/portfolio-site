import React from 'react'
import PropTypes from 'prop-types'

const Context = props => (
  <section className="context container">

    <h3 className="context-title">context</h3>
    <div className="context-about">
      {props.about}
    </div>

    <div className="context-info">
      <h6 className="subtitle">Tech</h6>
      <p>{props.tech}</p>
    </div>

    <div className="context-info">
      <h6 className="subtitle">Date</h6>
      <p>{props.date}</p>
    </div>

    <div className="context-info">
      <h6 className="subtitle">Skills</h6>
      <p>{props.skills}</p>
    </div>

    {props.visit &&
      <div className="context-info">
        <h6 className="subtitle">Visit</h6>
        <a
          href={`https://www.${props.visit}`}
          target="_blank"
			    rel="noopener noreferrer"
        >
          {props.visit}
        </a>
      </div>
    }
  </section>
)

Context.propTypes = {
  about: PropTypes.object,
  tech: PropTypes.string,
  date: PropTypes.string,
  skills: PropTypes.string,
  visit: PropTypes.string,
}

export default Context