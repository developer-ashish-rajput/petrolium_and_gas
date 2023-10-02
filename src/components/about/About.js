import React from 'react'
import OIL_EXTRACTION from "../../utils/images/11.jpg";
import PIPELINES_BUILDING from "../../utils/images/21.jpg"
import OIL_REFINEMENT from "../../utils/images/31.jpg"


const About = () => {
  return (
    <div>
          <section className="wd-section-blog text-center style2">
      <div className="wd-blog-post test">
        <img src={OIL_EXTRACTION} />
        <h4 className="wd-title-element">OIL EXTRACTION</h4>
        <p>
          As the world's largest green and clean energy specialist of the printing and typesetting industry.
          Lorem has been the industry.
        </p>
      </div>
    </section>
    <section className="wd-section-blog text-center style2">
      <div className="wd-blog-post test">
        <img src={ PIPELINES_BUILDING} />
        <h4 className="wd-title-element">PIPELINES BUILDING</h4>
        <p>
          As the world's largest green and clean energy specialist of the printing and typesetting industry.
          Lorem has been the industry.
        </p>
      </div>
    </section>
    <section className="wd-section-blog text-center style2">
      <div className="wd-blog-post test">
        <img src={OIL_REFINEMENT} />
        <h4 className="wd-title-element">OIL REFINEMENT</h4>
        <p>
          As the world's largest green and clean energy specialist of the printing and typesetting industry.
          Lorem has been the industry.
        </p>
      </div>
    </section>
    </div>
  )
}

export default About