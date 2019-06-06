import React from 'react'

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

export default BrowserMockup