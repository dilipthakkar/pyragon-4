import React from "react";
import "./ourpartner.css";
import Image1 from "../../Pyragon/Group 106.png";
import Image2 from "../../Pyragon/Group 108.png";
import Image3 from "../../Pyragon/Group 109.png";
const OurPartner = () => {
  return (
    <div className="our-partner-main-container">
      <h1>OUR PARTNER</h1>
      <div className="our-partner-second-container">
      <img src={Image1}/>
      <img src={Image2}/>
      <img src={Image3}/>
        
      
      </div>
    </div>
  );
};

export default OurPartner;
