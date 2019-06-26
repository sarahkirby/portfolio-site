import React from 'react'
import PropTypes from 'prop-types'

const MobileMockup = props => (
  <div className="mobile-mockup site-bgc">
    {props.numberOfScreens.map((screen, index) => (
      <div
        className="mobile-mockup-container"
        key={index}
      >
        <div className="mobile-mockup-screen" key={index}>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={`${screen.imgM}, ${screen.imgL} 2x`}
            />
            <img
              src={screen.imgS}
              srcSet={`${screen.imgM} 2x`}
              className="img"
              alt={screen.alt}
            />
          </picture>
        </div>
      </div>
    ))}
  </div>
)

MobileMockup.propTypes = {
  numberOfScreens: PropTypes.arrayOf(PropTypes.shape({
    imgS: PropTypes.string.isRequired,
    imgM: PropTypes.string.isRequired,
    imgL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired
}

export default MobileMockup