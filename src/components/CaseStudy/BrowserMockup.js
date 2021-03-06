import React from 'react'
import PropTypes from 'prop-types'

const BrowserMockup = props => (
  <div className={`browser-mockup ${props.customClass ? props.customClass : ''}`}>
    <div className={`browser-mockup-screen ${props.type}`}>
      {props.type === 'image' &&
        <picture>
          {props.imgXl &&
            <source
              media="(min-width: 1024px)"
              srcSet={`${props.imgL}, ${props.imgXl} 2x`}
            />
          }
          <source
            media="(min-width: 568px)"
            srcSet={`${props.imgM}, ${props.imgL} 2x`}
          />
          <img
            src={props.imgS}
            srcSet={`${props.imgM} 2x`}
            className="img"
            alt={props.alt}
          />
        </picture>
      }

      {props.type === 'video' &&
        <video preload="auto" autoPlay muted loop playsInline poster={props.imgM}>
          <source src={props.video} type="video/mp4" />
          <p>This browser does not support the video element.</p>
        </video>
      }
    </div>
  </div>
)

BrowserMockup.propTypes = {
  customClass: PropTypes.string,
  imgS: PropTypes.string,
  imgM: PropTypes.string,
  imgL: PropTypes.string,
  imgXl: PropTypes.string,
  video: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default BrowserMockup