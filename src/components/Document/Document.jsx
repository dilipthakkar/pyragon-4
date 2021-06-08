import React from "react";
import "./Document.css";
import Image from "../../Pyragon/Whitepaper-BG.png";
import backGround from "../../Pyragon/03.png";

import firstImage from "../../Pyragon/Whitepaper.png";
const Document = () => {
  return (
    <div className="document-main-container" id="document-main-container">
            <img class="demo-bg-document" src={backGround} alt="" />

      <h1>DOCUMENTS</h1>
      <div className="document-second-container">
        <div id="document-1" >
          <img src={firstImage} />
        </div>
        <div id="document-2">
        <img id="imgimgimg" src={Image} />
        </div>
      </div>
    </div>
  );
};

export default Document;
