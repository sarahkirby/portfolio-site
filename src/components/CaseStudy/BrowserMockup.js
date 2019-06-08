import React from 'react'
import PropTypes from 'prop-types'

const BrowserMockup = props => (
  <section className={`browser-mockup ${props.customClass}`}>
    <div className="browser-mockup-screen">
      <img
        src={props.image}
        alt={props.alt}
      />
    </div>
  </section>
)

BrowserMockup.propTypes = {
  customClass: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default BrowserMockup