import React from 'react'
import {Helmet} from 'react-helmet'
import Header from 'components/CaseStudy/Header'
import Context from 'components/CaseStudy/Context'
import BrowserMockup from 'components/CaseStudy/BrowserMockup'
import Description from 'components/CaseStudy/Description'
import MobileMockup from 'components/CaseStudy/MobileMockup'
import {enrichme} from 'assets/images/images'

const Enrichme = props => (
  <main className="enrichme fade-in mr5-m site-bgc">
    <Helmet>
      <title>enrichme - Sarah Kirby | Developer & Designer Portfolio</title>
    </Helmet>

    <Header
      title="enrichme"
      imgSx1={enrichme.header_sx1}
      imgSx2={enrichme.header_sx2}
      imgMx1={enrichme.header_mx1}
      imgLx1={enrichme.header_lx1}
      imgLx2={enrichme.header_lx2}
      alt="Four mobiles on a 45 degree angle display various screens from enrichme's UI, such as an error page, commission slider and creating a course."
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
      alt="Desktop UI of enrichme's 'Find a course' page. It displays three courses in a tile like design. The courses include weaving and painting. There is also a filter function whereby you can filter by location or creative medium."
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
        alt="A detailed close up of a course tile on the 'Find a course' page. It shows the tile's hover state, a roll over with additional information about the course, such as when the next class is and the creative medium."
        customClass="cropped-left"
        type="image"
      />
    </Description>

    <Description
      title="All in one place"
      description="With the ability to both run and attend courses, we needed a simple interface where you could manage either of the two. The navigation follows the same pattern, whether you select 'courses you are running' or 'courses you are booked to attend', the subnavigation lets you select either upcoming or past course information."
      customClass="w-100"
    />

    <BrowserMockup
      imgS={enrichme.yourCoursesMenu_s}
      imgM={enrichme.yourCoursesMenu_m}
      imgL={enrichme.yourCoursesMenu_l}
      imgXl={enrichme.yourCoursesMenu_xl}
      alt="A close up of the menu on the 'Your courses' dashboard. It's full width, white and consumes a third of the browser window. The title is blue along with the text of the currently selected item."
      customClass="cropped-center"
      type="image"
    />

    
    <div className="browser-col-2">
      <BrowserMockup
        imgS={enrichme.yourCourses_s}
        imgM={enrichme.yourCourses_m}
        imgL={enrichme.yourCourses_l}
        alt="Desktop UI of the 'Your courses' dashboard, with 'Courses you are booked to attend' and 'Past bookings' selected. Displayed under the menu are four courses such as, art, photography, brewing classes laid out in a tile design."
        customClass="cropped-center"
        type="image"
      />

      <BrowserMockup
        imgS={enrichme.manageCourse_s}
        imgM={enrichme.manageCourse_m}
        imgL={enrichme.manageCourse_l}
        alt="Desktop UI of the 'Your courses' dashboard, displaying the UI for managing Art classes. At the top is an overview of the price per person, number of bookings and total income and underneath an accordion for each class being run that displays the date, time and number of people booked."
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
          Previously to list a course on enrichme our users had to fill out a form and provide details about their course, such as the name, when it is being run, dates and times etc. They found this experience confusing and couldn’t visualise the outcome of what they were doing.&nbsp;
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
          description: "Work closely with UX designer, Web design, Front-end development",
        },
      ]}
    />

    <BrowserMockup
      video={enrichme.createCourse}
      imgM={enrichme.createCourse_m}
      type="video"
    />

    <BrowserMockup
      video={enrichme.createCourse2}
      imgM={enrichme.createCourse2_m}
      type="video"
      customClass="pt0"
    />

    <Description
      title="Fun experience"
      description="If a user stumbles across a page error, we didn’t want them to feel frustrated and leave our site. Given the creative freedom, I was able to come up with a playful concept that our audience could relate to. Check out the mobile version of error page below."
      customClass="block-description-img--r"
    >
      <BrowserMockup
        imgS={enrichme.scream_s}
        imgM={enrichme.scream_m}
        imgL={enrichme.scream_l}
        alt="Digital illustration/adaptation of Edvard Munch's Scream painting"
        customClass="cropped-right"
        type="image"
      />
    </Description>

    <Description
      title="Illustrations"
      description="To remove barriers for onboarding users, enrichme adopted a ‘Pay what you can’ business model. To engage users I created an interactive commission slider. As the commission rate increases, the illustration changes to reflect our gratitude for their generosity."
      customClass="block-description-img--l"
    >
      <BrowserMockup
        imgS={enrichme.sliderCropped_s}
        imgM={enrichme.sliderCropped_m}
        imgL={enrichme.sliderCropped_l}
        alt="Digital illustration of a man and woman dancing around a campfire"
        customClass="cropped-right"
        type="image"
      />
    </Description>

    <Description
      title="Responsive design"
      description="The experience and visual design of enrichme has been specifically built to be enjoyed on mobile through to desktop."
      customClass="w-100"
    />

    <MobileMockup
      numberOfScreens={[
        {
          imgS: `${enrichme.mobile4_s}`,
          imgM: `${enrichme.mobile4_m}`,
          imgL: `${enrichme.mobile4_l}`,
          alt: "Mobile UI of enrichme's sign up form."
        },
        {
          imgS: `${enrichme.mobile2_s}`,
          imgM: `${enrichme.mobile2_m}`,
          imgL: `${enrichme.mobile2_l}`,
          alt: "Mobile UI of enrichme's error page, which is a playful adaptation of Edvard Munch's Scream painting. The scream character is shocked that something has gone wrong."
        },
        {
          imgS: `${enrichme.mobile3_s}`,
          imgM: `${enrichme.mobile3_m}`,
          imgL: `${enrichme.mobile3_l}`,
          alt: "Mobile UI of enrichme's commission rate calculator. The UI includes a slider to adjust the commission rate, as the rate increases the illustration changes. The current illustration shows a man and woman roasting marshmallows around a campfire."
        },
        {
          imgS: `${enrichme.mobile1_s}`,
          imgM: `${enrichme.mobile1_m}`,
          imgL: `${enrichme.mobile1_l}`,
          alt: "Mobile UI of enrichme's create a course page. The UI shows the ability to upload a background image, add a title, name of tutor, and add a location."
        }
      ]}
    />
  </main>
)

export default Enrichme