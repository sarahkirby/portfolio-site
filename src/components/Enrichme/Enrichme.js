import React from 'react'
import Header from 'components/CaseStudy/Header'
import Context from 'components/CaseStudy/Context'
import BrowserMockup from 'components/CaseStudy/BrowserMockup'
import MobileMockup from 'components/CaseStudy/MobileMockup'
import {enrichme} from 'assets/images/images'

const Enrichme = props => (
  <section className="enrichme">
    <Header
      title='enrichme'
    />

    <Context
      about={
        <p>
          <span>
            enrichme is a small start up that provides a digital space for creative people. It offers a simple way to list courses, take bookings, and process payments.
          </span>
          <span>
            Working in a team of two to build the web application, my role ranged from creating the visual aesthetic of enrichme through to working on the front-end of the application. The front-end is built using React, Redux, Typescript and Sass.
          </span>
        </p>
      }
      tech="React, Redux, Typescript, Sass"
      date="May 2016 - October 2018"
      skills="Web design, Front-end development, Illustration"
      visit="enrichme.io"
    />

    <BrowserMockup
      customClass=""
      image={enrichme.lx2}
      alt="testing at the moment"
    />

    <MobileMockup
      numberOfScreens={[
        {
          image: `${enrichme.sx1}`,
          alt: "testing at the moment"
        }
      ]}
    />
  </section>
)

export default Enrichme