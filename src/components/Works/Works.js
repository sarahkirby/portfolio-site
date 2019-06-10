import React from 'react'
import WorkSingle from 'components/Works/WorkSingle'
import AnimateOnVisible from 'components/Helpers/AnimateOnVisible'
import {enrichme} from 'assets/images/images'

const Works = props => (
  <main className="works"> 
    <AnimateOnVisible>
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
    </AnimateOnVisible>

    <AnimateOnVisible>
      <WorkSingle
        title="BCITO"
        subtitle="View work"
        alt="bcito alt"
        class="bcito"
      />
    </AnimateOnVisible>

    <AnimateOnVisible>
      <WorkSingle
        title="Biome"
        subtitle="View work"
        alt="biome alt"
        class="biome"
      />
    </AnimateOnVisible>

    <AnimateOnVisible>
      <WorkSingle
        title="F Waste"
        subtitle="View work"
        alt="fwaste alt"
        class="fwaste"    
      />
    </AnimateOnVisible>
  </main>
)

export default Works