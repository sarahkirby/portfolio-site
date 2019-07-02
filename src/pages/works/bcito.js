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
      alt="A light blue background with a white desktop computer displays the file library UI from the BCITO application."
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
      alt="Desktop UI of the dashboard page. It welcomes the user Tabitha (a supervisor). Here she can browse through a list of her students to view their work/progress."
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
          alt="Desktop and mobile UI of the dashboard page. It welcomes the user Johnny (an apprentice). Here he can quickly access his overview and evidence pages, as well as upload evidence."
        />
      </picture>
    </div>

    <Description
      title="Mobile first"
      description="Because not all apprentices own computers, it was important the application could work seamlessly on mobile devices. The below UI is based on the ‘Mahara mobile’ app and demonstrates how an apprentice might upload and tag a piece of evidence from their mobile."
      customClass="w-100"
    />

    <MobileMockup
      numberOfScreens={[
        {
          imgS: `${bcito.mobileOne_s}`,
          imgM: `${bcito.mobileOne_m}`,
          imgL: `${bcito.mobileOne_l}`,
          alt: "Customised version of the Mahara mobile UI. Large blue buttons allow the user to quickly upload evidence."
        },
        {
          imgS: `${bcito.mobileTwo_s}`,
          imgM: `${bcito.mobileTwo_m}`,
          imgL: `${bcito.mobileTwo_l}`,
          alt: "Mahara mobile pending uploads screen shows an image of a builder hammering nails. Blue buttons show edit, delete and upload to your Mahara."
        },
        {
          imgS: `${bcito.mobileThree_s}`,
          imgM: `${bcito.mobileThree_m}`,
          imgL: `${bcito.mobileThree_l}`,
          alt: "Mahara mobile details screen shows a title, description and tags input that can be edited and saved."
        },
        {
          imgS: `${bcito.mobileFour_s}`,
          imgM: `${bcito.mobileFour_m}`,
          imgL: `${bcito.mobileFour_l}`,
          alt: "Mahara mobile pending uploads screen. The asset 'johnny-img.jpg' is ready to be uploaded to his Mahara file library. A blue button reads 'upload to your Mahara'."
        },
      ]}
    />

    <Description
      title="File Library"
      description="Once an apprentice uploads a piece of evidence, it shows up in their file library. This is a place where they can spend time editing and tagging evidence to the relevant skill set they are working towards. To avoid the scroll of death, a filtering system provides an easy way to find evidence."
      customClass="block-description-img--r"
    >
      <BrowserMockup
        imgS={bcito.fileLibraryCropped_s}
        imgM={bcito.fileLibraryCropped_m}
        imgL={bcito.fileLibraryCropped_l}
        alt="A cropped view of the file library UI. The title reads Carpentry by Johnny. Underneath the title is filtering options, followed by individual assets laid out in a tile like design."
        customClass="cropped-left"
        type="image"
      />
    </Description>

    <BrowserMockup
      imgS={bcito.fileLibrary_s}
      imgM={bcito.fileLibrary_m}
      imgL={bcito.fileLibrary_l}
      imgXl={bcito.fileLibrary_xl}
      alt="Desktop view of the file library showing the detailed asset view. When a piece of evidence is selected, a draw like modal slides in from the right. The evidence is a picture of a builder hammering nails."
      type="image"
    />

    <Description
      title="Overview"
      description="Evidence that’s ready for assessment can be submitted to the apprentice’s Smart Evidence page. This provides a visual overview of their progress towards achieving each skill set. This is where supervisors can approve evidence, leave feedback through comments and sign off skill sets when the criteria has been met."
      customClass="block-description-img--l"
    >
      <BrowserMockup
        imgS={bcito.overviewCropped_s}
        imgM={bcito.overviewCropped_m}
        imgL={bcito.overviewCropped_l}
        alt="Cropped view of the smart evidence page. The title displays Carpentry by Johnny. The skillset 'Tools and equipment of the trade' has four pieces of approved evidence and one piece pending review."
        customClass="cropped-left"
        type="image"
      />
    </Description>

    <BrowserMockup
      video={bcito.overview}
      imgM={bcito.overview_m}
      type="video"
    />
  </section>
)

export default Bcito