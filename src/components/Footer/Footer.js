import React from 'react'

const Footer = props => (
  <footer className="footer fade-in">
    <h5>Want to get in touch?</h5>

    <div className="footer-container">
      <a href="mailto:sk.irby@icloud.com">
        <i className="far fa-envelope" />
        sk.irby@icloud.com
      </a>

      <a href="tel:+447562781121">
        <i className="fas fa-mobile-alt" />
        + 44 7562 781121
      </a>

      {/* <a href="#">
        <i className="fas fa-download"></i>
        Curriculum Vitae
      </a> */}
    </div>
  </footer>
)

export default Footer