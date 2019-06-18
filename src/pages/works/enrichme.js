import React from 'react'
import {Helmet} from 'react-helmet'
import Header from 'components/CaseStudy/Header'
import Context from 'components/CaseStudy/Context'
import BrowserMockup from 'components/CaseStudy/BrowserMockup'
import Description from 'components/CaseStudy/Description'
import MobileMockup from 'components/CaseStudy/MobileMockup'
import {enrichme} from 'assets/images/images'

const Enrichme = props => (
  <section className="enrichme fade-in mr5-m site-bgc">
    <Helmet>
      <title>enrichme - Sarah Kirby | Developer & Designer Portfolio</title>
    </Helmet>

    <Header
      title="enrichme"
      img={enrichme.lx2}
      alt="testing atm"
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
      image={enrichme.homePagex2}
      alt="testing at the moment"
      type="image"
    />

    <Description
      title="Browse courses with ease"
      description="Roll overs provide additional information so you can decided whether you're interested in a course before clicking through."
      customClass="w-40-m"
    >
      <BrowserMockup
        video={enrichme.courseCard}
        customClass="cropped-left w-60-m"
        type="video"
      />
    </Description>

    <Description
      title="Manage courses all in one place"
      description="Roll overs provide additional information so you can decided whether you're interested in a course or not before clicking through."
      customClass="w-100"
    />

    <BrowserMockup
      image={enrichme.homePagex2}
      alt="testing at the moment"
      customClass="cropped-center"
      type="image"
    />

    
    <div className="browser-col-2">
      <BrowserMockup
        image={enrichme.homePagex2}
        alt="testing at the moment"
        type="image"
      />

      <BrowserMockup
        image={enrichme.homePagex2}
        alt="testing at the moment"
        type="image"
      />
    </div>

    <Description
      title=" The web app experience"
      description="Roll overs provide additional information so you can decided whether you're interested in a course or not before clicking through."
      customClass="w-100"
    />

    <MobileMockup
      numberOfScreens={[
        {
          image: `${enrichme.sx1}`,
          alt: "testing at the moment"
        },
        {
          image: `${enrichme.sx1}`,
          alt: "testing at the moment"
        },
        {
          image: `${enrichme.sx1}`,
          alt: "testing at the moment"
        },
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

    <BrowserMockup
      video={enrichme.createCourse}
      type="video"
    />
  </section>
)

export default Enrichme