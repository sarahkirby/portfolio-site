import React from 'react'

const Footer = props => (
  <footer id="contact" className="Footer fade-in">
    <h5 className="Footer__title">Want to get in touch?</h5>

    <div className="Footer__wrapper">
      <a href="mailto:sk.irby@icloud.com" className="Footer__link">
        <i
          className="far fa-envelope Footer__linkicon"
          aria-hidden="true"
          role="presentation"
        />
        sk.irby@icloud.com
      </a>

      <a href="tel:+447562781121" className="Footer__link">
        <i
          className="fas fa-mobile-alt Footer__linkicon"
          aria-hidden="true"
          role="presentation"
        />
        + 44 7562 781121
      </a>
    </div>
  </footer>
)

export default Footer