import React from 'react'
import WorkSingle from 'components/Works/WorkSingle'
import AnimateOnScroll from 'components/Helpers/AnimateOnScroll'
import {enrichme} from 'assets/images/images'

const Works = props => (
  <main className="works fade-in"> 
    <AnimateOnScroll>
      <WorkSingle
        title="enrichme"
        subtitle="View works"
        imgSx1={enrichme.sx1}
        imgSx2={enrichme.sx2}
        imgMx1={enrichme.mx1}
        imgMx2={enrichme.mx2}
        imgLx1={enrichme.lx1}
        imgLx2={enrichme.lx2}
        alt="Four mobile screens displaying screenshots of enrichme's website"
        class="enrichme"
      />
    </AnimateOnScroll>

    <AnimateOnScroll>
      <WorkSingle
        title="BCITO"
        subtitle="View work"
        alt="bcito alt"
        class="bcito"
      />
    </AnimateOnScroll>

    <AnimateOnScroll>
      <WorkSingle
        title="Biome"
        subtitle="View work"
        alt="biome alt"
        class="biome"
      />
    </AnimateOnScroll>

    <AnimateOnScroll>
      <WorkSingle
        title="F Waste"
        subtitle="View work"
        alt="fwaste alt"
        class="fwaste"    
      />
    </AnimateOnScroll>
  </main>
)

export default Works