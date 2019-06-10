import React from 'react'
import {Helmet} from 'react-helmet'
import Header from 'components/CaseStudy/Header'
import Context from 'components/CaseStudy/Context'
import BrowserMockup from 'components/CaseStudy/BrowserMockup'
import MobileMockup from 'components/CaseStudy/MobileMockup'
import {enrichme} from 'assets/images/images'

const Enrichme = props => (
  <section className="enrichme">
    <Helmet>
      <title>enrichme - Sarah Kirby | Developer & Designer Portfolio</title>
    </Helmet>

    <Header
      title='enrichme'
    />

    <Context
      title="context"
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
      info={[
        {
          subtitle: "Tech",
          description: "React, Redux, Typescript, Sass"
        },
        {
          subtitle: "Date",
          description: "May 2016 - October 2018"
        },
        {
          subtitle: "Skills",
          description: "Web design, Front-end development, Illustration"
        },
      ]}
      visit="enrichme.io"
    />

    <BrowserMockup
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

    <Context
    title="challenges"
    subtitle="Designing for our users"
    customClass="col-2"
    about={
      <p>
      <span>
        Enrichme’s target audience are women in their 50’s - 60’s, who sometimes find navigating a website challenging if it isn’t intuitive.
      </span>
      <span>
        Previously to list a course on enrichme our users had to fill out a form and provide details about their course, such as the name, when it is being run, dates and times etc. They found this experience confusing and couldn’t visualise the outcome of what they were doing.
      </span>
      <span>
        As listing a course is important to the success of enrichme, we got the help of a UX Designer to help design an interface our users could understand.
      </span>
    </p>
    }
    info={[
      {
        subtitle: "Solution",
        description: "Our users are visual people, so we designed and developed an interface where our users could see what the end result will look like while they are providing information to list their course.",
      },
      {
        subtitle: "Skills",
        description: "Work closely with UX designer, web design, front-end development",
      },
    ]}
    />
  </section>
)

export default Enrichme