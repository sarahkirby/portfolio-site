import React from 'react'
import PropTypes from 'prop-types'

const MobileMockup = props => (
  <section className="mobile-mockup site-bgc">
    {props.numberOfScreens.map((screen, index) => (
      <div
        className="mobile-mockup-container"
        key={index}
      >
        <div className="mobile-mockup-screen" key={index}>
          <img
            src={screen.image}
            alt={screen.alt}
          />
        </div>
      </div>
    ))}
  </section>
)

MobileMockup.propTypes = {
  numberOfScreens: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired
}

export default MobileMockup