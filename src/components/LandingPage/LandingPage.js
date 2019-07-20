import React from 'react'
import {me} from 'assets/images/images'

const LandingPage = props => (
  <section className="LandingPage">
    <div className="LandingPage__wrapper">
      <div className="LandingPage__content">
        <h1 className="LandingPage__title">
          <div className="LandingPage__transition">
            <span className="LandingPage__transition-content LandingPage__transition-content--1">
              Sarah&nbsp;
            </span>
          </div>
          <div className="LandingPage__transition">
            <span className="LandingPage__transition-content LandingPage__transition-content--2">
              Kirby
            </span>
          </div>
        </h1>

        <p className="LandingPage__info">
          <b>Front-end developer&nbsp;</b>
          <br />
          and <b>designer</b> living&nbsp;
          <br />
          in <b>London.</b>
        </p>
      </div>
      
      <div className="LandingPage__visual">
        <img
          src={me}
          alt="Moody studio photograph of Sarah Kirby"
          className="LandingPage__img"
        />
      </div>
    </div>
  </section>
)

export default LandingPage