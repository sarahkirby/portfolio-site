import React from 'react'
import PropTypes from 'prop-types'

const BrowserMockup = props => (
  <section className={`browser-mockup ${props.customClass ? props.customClass : ''}`}>
    <div className={`browser-mockup-screen ${props.type}`}>
      {props.image &&
        <img
          src={props.image}
          alt={props.alt}
        />
      }

      {props.video &&
        <video preload="auto" autoPlay muted loop playsInline>
          <source src={props.video} type="video/mp4" />
          <p>This browser does not support the video element.</p>
        </video>
      }
    </div>
  </section>
)

BrowserMockup.propTypes = {
  customClass: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default BrowserMockup