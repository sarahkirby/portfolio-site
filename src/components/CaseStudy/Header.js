import React from 'react'

const Header = props => (
  <section className="header">
    <div className="header-title">
      <h1>{props.title}</h1>
    </div>
    
    <div className="img-block">
      <div className="img"></div>
    </div>
  </section>
)

export default Header