import React from 'react'
import {Helmet} from 'react-helmet'
import Header from 'components/CaseStudy/Header'
import Context from 'components/CaseStudy/Context'
import BrowserMockup from 'components/CaseStudy/BrowserMockup'
import MobileMockup from 'components/CaseStudy/MobileMockup'
import Description from 'components/CaseStudy/Description'
import {bcito} from 'assets/images/images'

const Bcito = props => (
  <section className="bcito fade-in mr5-m site-bgc">
    <Helmet>
      <title>BCITO - Sarah Kirby | Developer & Designer Portfolio</title>
    </Helmet>

    <Header
      title="BCITO"
      img={bcito.lx2}
      alt="testing atm"
    />

    <Context
      title="context"
      about={
        <p>
          <span>
            BCITO (Building and Construction Industry Training Organisation) is the largest provider of construction trade apprenticeships in New Zealand. As apprentices learn on the job, they require a digital platform to record and upload evidence of their work for supervisors to assess.
          </span>
          <span>
            Working alongside a small team at Catalyst IT, we created a solution to present to BCITO. Many businesses presented solutions, however they went with ours.
          </span>
        </p>
      }
      info={[
        {
          subtitle: "Tech",
          description: "UXPin, Mahara ePortfolio"
        },
        {
          subtitle: "Date",
          description: "October 2018"
        },
        {
          subtitle: "Skills",
          description: "UX Design, Prototyping, Theming"
        },
      ]}
    />

    <BrowserMockup
      imgS={bcito.supervisorDash_xl}
      imgM={bcito.supervisorDash_xl}
      imgL={bcito.supervisorDash_xl}
      imgXl={bcito.supervisorDash_xl}
      type="image"
    />

    <Context
      title="solution"
      customClass="col-2"
      about={
        <p>
          Using a combination of Mahara mobile and a customised version of Mahara’s ePortfolio system, apprentices are able to upload media such as images, videos, voice recordings from their mobile which they can later edit and tag to the relevant skill they are working towards and submit for assessment.
        </p>
      }
      info={[
        {
          subtitle: "Role",
          description: "Working closely with Catalyst’s head of design to develop wireframes for each user’s journey - the apprentice, supervisor and employer. My familiarity with Marahara’s ePortfolio system, meant I could help advise on how we could utilise Marahara’s existing UI while implementing the experience and functionality required by BCITO."
        },
        {
          description: "From here I created a high fidelity prototype that presented each user’s journey through the application. This was then presented to BCITO to provide a close representation of how the application might look and function."
        }
      ]}
    />

    <div className="full-width-img">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={`${bcito.apprenticeDash_l}, ${bcito.apprenticeDash_xl} 2x`}
        />
        <source
          media="(min-width: 568px)"
          srcSet={`${bcito.apprenticeDash_m}, ${bcito.apprenticeDash_l} 2x`}
        />
        <img
          src={bcito.apprenticeDash_s}
          srcSet={`${bcito.apprenticeDash_m} 2x`}
          alt="testing atm"
        />
      </picture>
    </div>

    <Description
      title="Mobile first"
      description="Roll overs provide additional information so you can decided whether you're interested in a course or not before clicking through."
      customClass="w-100"
    />

    <MobileMockup
      numberOfScreens={[
        {
          imgS: `${bcito.mobileOne_s}`,
          imgM: `${bcito.mobileOne_m}`,
          imgL: `${bcito.mobileOne_l}`,
          alt: "testing at the moment"
        },
        {
          imgS: `${bcito.mobileTwo_s}`,
          imgM: `${bcito.mobileTwo_m}`,
          imgL: `${bcito.mobileTwo_l}`,
          alt: "testing at the moment"
        },
        {
          imgS: `${bcito.mobileThree_s}`,
          imgM: `${bcito.mobileThree_m}`,
          imgL: `${bcito.mobileThree_l}`,
          alt: "testing at the moment"
        },
        {
          imgS: `${bcito.mobileFour_s}`,
          imgM: `${bcito.mobileFour_m}`,
          imgL: `${bcito.mobileFour_l}`,
          alt: "testing at the moment"
        },
      ]}
    />

    <Description
      title="File Library"
      description="Roll overs provide additional information so you can decided whether you're interested in a course before clicking through."
      customClass="block-description-img--r"
    >
      <BrowserMockup
        imgS={bcito.fileLibraryCropped_s}
        imgM={bcito.fileLibraryCropped_m}
        imgL={bcito.fileLibraryCropped_l}
        customClass="cropped-left"
        type="image"
      />
    </Description>

    <BrowserMockup
      imgS={bcito.fileLibrary_s}
      imgM={bcito.fileLibrary_m}
      imgL={bcito.fileLibrary_l}
      imgXl={bcito.fileLibrary_xl}
      type="image"
    />

    <Description
      title="Overview"
      description="Roll overs provide additional information so you can decided whether you're interested in a course before clicking through."
      customClass="block-description-img--l"
    >
      <BrowserMockup
        imgS={bcito.overviewCropped_s}
        imgM={bcito.overviewCropped_m}
        imgL={bcito.overviewCropped_l}
        customClass="cropped-left"
        type="image"
      />
    </Description>

    <BrowserMockup
      video={bcito.overview}
      imgM={bcito.overview_m}
      alt="testing"
      type="video"
    />
  </section>
)

export default Bcito