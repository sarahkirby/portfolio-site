import React from 'react'
import WorkSingle from 'components/Works/WorkSingle'
import AnimateOnScroll from 'components/Helpers/AnimateOnScroll'
import {enrichme, bcito, fwaste} from 'assets/images/images'

const Works = props => (
  <main className="works fade-in"> 
    <AnimateOnScroll>
      <WorkSingle
        title="enrichme"
        link="/enrichme"
        imgSx1={enrichme.workCover_sx1}
        imgSx2={enrichme.workCover_sx2}
        imgMx1={enrichme.workCover_mx1}
        imgMx2={enrichme.workCover_lx1}
        imgLx1={enrichme.workCover_lx1}
        imgLx2={enrichme.workCover_lx2}
        alt="Four mobile screens displaying screenshots of enrichme's website"
        class="enrichme"
      />
    </AnimateOnScroll>

    <AnimateOnScroll>
      <WorkSingle
        title="BCITO"
        link="/bcito"
        imgSx1={bcito.sx1}
        imgSx2={bcito.sx2}
        imgLx2={bcito.lx2}
        alt="bcito alt"
        class="bcito"
      />
    </AnimateOnScroll>

    {/* <AnimateOnScroll>
      <WorkSingle
        title="Biome"
        link="/enrichme"
        alt="biome alt"
        class="biome"
      />
    </AnimateOnScroll> */}

    <AnimateOnScroll>
      <WorkSingle
        title="F Waste"
        link="/fwaste"
        imgLx2={fwaste.lx2}
        alt="fwaste alt"
        class="fwaste"    
      />
    </AnimateOnScroll>
  </main>
)

export default Works