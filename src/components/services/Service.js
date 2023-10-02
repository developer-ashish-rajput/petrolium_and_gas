import React from 'react'
import Awesome_Employees from "../../utils/icons/icon11.jpg";
import Maximu_Power from "../../utils/icons/icon81.jpg";
import Oil_Resources from "../../utils/icons/icon71.jpg";
import Continues_Development from "../../utils/icons/icon61.jpg";
import Chimical_Analysis from "../../utils/icons/icon51.jpg";
import We_Fight from "../../utils/icons/icon41.jpg";
import  The_Consumer from "../../utils/icons/icon31.jpg";
import About_Environment from "../../utils/icons/icon9.jpg";

function EnergyInfo() {
    return (
      <div className="wd-title-section_c">
        <h2>We Provide Energy</h2>
        <h5>To many clients like government, homes, and offices</h5>
      </div>
    );
  }
  
  function FeatureBox({ iconSrc, title, description }) {
    return (
      <div className="wpb_column vc_column_container vc_col-sm-3" data-equalizer-watch>
        <div className="wpb_wrapper">
          <div className="wd-section-text-icon">
            <div
              className="wd-text-icon-style5 animated fadeInUp"
              data-animated="fadeInUp"
              style={{ opacity: 1, animationDelay: '0ms' }}
            >
              <div className="box-icon">
                <img src={iconSrc} alt="icon" />
              </div>
              <div className="box-description">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

const Service = () => {
  return (
    <div>
    <EnergyInfo />
    <div className="vc_row wpb_row vc_inner vc_row-fluid row">
      <FeatureBox
        iconSrc={Awesome_Employees}
        title="Awesome Employees"
        description="Our services are so awesome of passages of Lerem ipsum available"
      />
      <FeatureBox
        iconSrc={ Maximu_Power}
        title="Maximum Power"
        description="Get Unlimited Energy of passages of Lerem ipsum available"
      />
      <FeatureBox
        iconSrc={Oil_Resources}
        title="Oil Resources"
        description="There are many variations of passages of Lerem ipsum available"
      />
      <FeatureBox
        iconSrc={Continues_Development}
        title="Continues Development"
        description="There are many variations of passages of Lerem ipsum available"
      />
    </div>
    <div className="vc_row wpb_row vc_inner vc_row-fluid row vc_custom_1451926431099">
      <FeatureBox
        iconSrc={Chimical_Analysis }
        title="Chimical Analysis"
        description="There are many variations of passages of Lerem ipsum available"
      />
      <FeatureBox
        iconSrc={We_Fight}
        title="We Fight Pollution"
        description="There are many variations of passages of Lerem ipsum available"
      />
      <FeatureBox
        iconSrc={The_Consumer}
        title="We Think About The Consumer"
        description="There are many variations of passages of Lerem ipsum available"
      />
      <FeatureBox
        iconSrc={About_Environment }
        title="We Care About Environment"
        description="There are many variations of passages of Lerem ipsum available"
      />
    </div>
  </div>

  )
}

export default Service
