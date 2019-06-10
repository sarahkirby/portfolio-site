import React from 'react'
import PropTypes from 'prop-types'

const Context = props => (
  <section className="context container">

    <h3 className="context-title">
      {props.title}
    </h3>

    {props.subtitle &&
      <h4 className={props.customClass}>
        {props.subtitle}
      </h4>
    }

    <div className="context-about">
      {props.about}
    </div>

    {props.info.map((i, index) => (
      <div
        className={`context-info ${props.customClass ? props.customClass : ''}`}
        key={index}
      >
        <h6 className="subtitle">{i.subtitle}</h6>
        <p>{i.description}</p>
      </div>
    ))}

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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  customClass: PropTypes.string,
  about: PropTypes.object,
  info: PropTypes.array,
  visit: PropTypes.string,
}

export default Context