import React from "react";
import "./roadmap.css";
import Image from "../../Pyragon/Roadmap.png";
const Roadmap = () => {
  return (
    <div className="roadmap-main-container" id="roadmap-main-container">
      <h1 className="headings">THE ROADMAP</h1>
      <div className="image">
        <img src={Image} alt="roadmap" />
      </div>
    </div>
  );
};

export default Roadmap;
