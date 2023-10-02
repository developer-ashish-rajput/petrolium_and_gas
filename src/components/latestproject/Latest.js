import React from 'react'
import Frozen_Trees from "../../utils/images/8555736073_8cde64941a_b-380x254.jpg";
import Consectetur_adipiscing from "../../utils/images/3884986065_549b96eff4_z1-380x254.jpg";
import Consectetur_adipiscing1  from "../../utils/images/8556847492_a1a562151b_b-380x254.jpg";

const projectsData = [
  {
    imgSrc: Frozen_Trees,
    title: "Frozen Trees In A Lake",
    link: "https://themes.webdevia.com/petroleum-gas/?portfolio=consectetur-adipiscing-6",
      categories: ["DESIGN", "INTERIOR", "OFFICE"]
    },
    {
      imgSrc: Consectetur_adipiscing,
      title: "Consectetur adipiscing",
      link: "https://themes.webdevia.com/petroleum-gas/?portfolio=consectetur-adipiscing",
      categories: ["DESIGN", "INTERIOR", "OFFICE"]
    },
    {
      imgSrc: Consectetur_adipiscing1,
      title: "Consectetur adipiscing",
      link: "https://themes.webdevia.com/petroleum-gas/?portfolio=consectetur-adipiscing-5",
      categories: ["DESIGN", "INTERIOR", "OFFICE"]
    }
  ];

  
const Latest = () => {
  return (
    <div>
    <div className="wd-title-section_c">
      <h2>Latest Projects</h2>
      <h5>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
      </h5>
    </div>

    <div className="wd-section-project">
      <ul className="masque portfolio-grid small-block-grid-1 medium-block-grid-2 large-block-grid-3">
        {projectsData?.map((project, index) => (
          <li key={index} className="animated fadeInUp" data-animated="fadeInUp" style={{ opacity: 1, animationDelay: `${index * 300}ms` }}>
            <div className="wd-project hvr-underline-from-center">
              <img width="380" height="254" src={project.imgSrc} className="attachment-petroleum_portfolio size-petroleum_portfolio wp-post-image" alt="" decoding="async" />
              <a href={project.link}><h4>{project.title}</h4></a>
              <p>{project.categories.map((category, i) => (
                <span key={i}>{category}{i < project.categories.length - 1 ? ' - ' : ''}</span>
                ))}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>

  )
}

export default Latest