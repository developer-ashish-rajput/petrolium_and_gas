import React from 'react'
import The_Planet from "../../utils/images/CEO-d3.png";

const Planet = () => {
  return (
    <>
    <div> <div className="">
    <div className="large-12 columns wd-title-section_l">
      <h2>Save The Planet!</h2>
      <h5>
        Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis.
      </h5>
    </div>
  </div>
  </div>
  <div className="wpb_single_image wpb_content_element vc_align_right">
      <figure className="wpb_wrapper vc_figure">
        <div className="vc_single_image-wrapper vc_box_border_grey">
          <img
            width="391"
            height="447"
            src={The_Planet}
            className="vc_single_image-img attachment-full"
            alt=""
            decoding="async"
            loading="lazy"
            title="CEO-d3"
            srcSet="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3.png 391w, https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3-350x400.png 350w, https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3-262x300.png 262w"
            sizes="(max-width: 391px) 100vw, 391px"
          />
        </div>
      </figure>
    </div>
  </>
  
  )
}

export default Planet