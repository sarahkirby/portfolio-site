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
      imgS={enrichme.findACourse_s}
      imgM={enrichme.findACourse_m}
      imgL={enrichme.findACourse_l}
      imgXl={enrichme.findACourse_xl}
      alt="testing at the moment"
      type="image"
    />

    <Description
      title="Browse with ease"
      description="Roll overs provide additional information so you can decided whether you're interested in a course before clicking through."
      customClass="block-description-img--r"
    >
      <BrowserMockup
        imgS={enrichme.courseCard_s}
        imgM={enrichme.courseCard_m}
        imgL={enrichme.courseCard_l}
        customClass="cropped-left"
        type="image"
      />
    </Description>

    <Description
      title="All in one place"
      description="Roll overs provide additional information so you can decided whether you're interested in a course or not before clicking through."
      customClass="w-100"
    />

    <BrowserMockup
      imgS={enrichme.yourCoursesMenu_s}
      imgM={enrichme.yourCoursesMenu_m}
      imgL={enrichme.yourCoursesMenu_l}
      imgXl={enrichme.yourCoursesMenu_xl}
      alt="testing at the moment"
      customClass="cropped-center"
      type="image"
    />

    
    <div className="browser-col-2">
      <BrowserMockup
        imgS={enrichme.yourCourses_s}
        imgM={enrichme.yourCourses_m}
        imgL={enrichme.yourCourses_l}
        alt="testing at the moment"
        customClass="cropped-center"
        type="image"
      />

      <BrowserMockup
        imgS={enrichme.manageCourse_s}
        imgM={enrichme.manageCourse_m}
        imgL={enrichme.manageCourse_l}
        alt="testing at the moment"
        customClass="cropped-center"
        type="image"
      />
    </div>

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

    <BrowserMockup
      video={enrichme.createCourse2}
      type="video"
      customClass="pt0"
    />

    <Description
      title="Illustrations"
      description="Roll overs provide additional information so you can decided whether you're interested in a course or not before clicking through."
      customClass="block-description-img--r"
    >
      <BrowserMockup
        imgS={enrichme.scream_s}
        imgM={enrichme.scream_m}
        imgL={enrichme.scream_l}
        alt="testing at the moment"
        customClass="cropped-right"
        type="image"
      />
    </Description>

    <Description
      title="Fun experience"
      description="Roll overs provide additional information so you can decided whether you're interested in a course or not before clicking through."
      customClass="block-description-img--l"
    >
      <BrowserMockup
        imgS={enrichme.sliderCropped_s}
        imgM={enrichme.sliderCropped_m}
        imgL={enrichme.sliderCropped_l}
        alt="testing at the moment"
        customClass="cropped-right"
        type="image"
      />
    </Description>

    <Description
      title="Responsive design"
      description="Roll overs provide additional information so you can decided whether you're interested in a course or not before clicking through."
      customClass="w-100"
    />

    <MobileMockup
      numberOfScreens={[
        {
          imgS: `${enrichme.mobile4_s}`,
          imgM: `${enrichme.mobile4_m}`,
          imgL: `${enrichme.mobile4_l}`,
          alt: "testing at the moment"
        },
        {
          imgS: `${enrichme.mobile2_s}`,
          imgM: `${enrichme.mobile2_m}`,
          imgL: `${enrichme.mobile2_l}`,
          alt: "testing at the moment"
        },
        {
          imgS: `${enrichme.mobile3_s}`,
          imgM: `${enrichme.mobile3_m}`,
          imgL: `${enrichme.mobile3_l}`,
          alt: "testing at the moment"
        },
        {
          imgS: `${enrichme.mobile1_s}`,
          imgM: `${enrichme.mobile1_m}`,
          imgL: `${enrichme.mobile1_l}`,
          alt: "testing at the moment"
        }
      ]}
    />
  </section>
)

export default Enrichme