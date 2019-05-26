import React from 'react'
import {enrichme} from 'assets/images/images'

class Works extends React.Component {
  render() {
    const projectData = [
      {
        title: 'enrichme',
        subtitle: 'View works',
        imgSx1: `${enrichme.sx1}`,
        imgSx2: `${enrichme.sx2}`,
        imgMx1: `${enrichme.mx1}`,
        imgMx2: `${enrichme.mx2}`,
        imgLx1: `${enrichme.lx1}`,
        imgLx2: `${enrichme.lx2}`,
        alt: `Four mobile screens displaying screenshots of enrichme's website`,
        class: 'enrichme'
      },
      {
        title: 'BCITO',
        subtitle: 'View work',
        imgsx1: `${enrichme.lx1}`,
        alt: `bcito alt`,
        class: 'bcito'
      },
      {
        title: 'Biome',
        subtitle: 'View work',
        imgsx1: `${enrichme.lx1}`,
        alt: `biome alt`,
        class: 'biome'
      },
      {
        title: 'F Waste',
        subtitle: 'View work',
        imgsx1: `${enrichme.lx1}`,
        alt: `fwaste alt`,
        class: 'fwaste'
      },
    ]

    return (
      <main className="works">
        {projectData.map((p) => (
          <section
            className={`work work-${p.class}`}
            key={p.class}
          >
            <div className="work-text">
              <h1 className="title">
                {p.title}
              </h1>
              <span className="line"/>
              <h6 className="subtitle">
                {p.subtitle}
              </h6>
            </div>

            <div className="work-img">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={`${p.imgLx1}, ${p.imgLx2} 2x`}
                />
                <source
                  media="(min-width: 568px)"
                  srcSet={`${p.imgMx1}, ${p.imgMx2} 2x`}
                />
                <img
                  src={p.imgSx1}
                  srcSet={`${p.imgSx2} 2x`}
                  className="img"
                  alt={p.alt}
                />
              </picture>
            </div>
          </section>
        ))}
      </main>
    )
  }
}

export default Works