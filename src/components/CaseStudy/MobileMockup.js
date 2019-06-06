import React from 'react'

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

export default MobileMockup