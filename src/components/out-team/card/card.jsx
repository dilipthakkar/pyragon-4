import React from "react";
import "./card.css"
import Info from "../../../Pyragon/info-icon.png";
import FaceBook from "../../../Pyragon/facebook-icon.png";
import LinkedIn from "../../../Pyragon/linkedin-svgrepo-com.svg";
import Twitter from "../../../Pyragon/twitter-svgrepo-com2.svg" ;
const Card = ({name , description}) => {
  return (
    <div id="our-team-card">
      <div id="sample-image"></div>
      <div id="sample-block-2"> 

      <img src={Info} style={{width : "25px" , height : "25px"}}/>
      <p id="cards-first-para">{name}</p>
      <p>{description}</p>
      <div id="card-icons">
        <img src={LinkedIn} style={{width : "20px" , height : "20px"}}/>
        <img src={Twitter} style={{width : "20px" , height : "20px"}} />
        <img src={FaceBook} style={{width : "20px" , height : "20px"}} />
      </div>

      </div>
      
    </div>
  );
};

export default Card;
