import React from "react";
import Logo from "../../Pyragon/PyraGon.png";
import BackGround from "../../Pyragon/1.png";
import "./about.css";

const About = () => {
  return (
    <div className="popup-main-container">
      <img class="demo-bg" src={BackGround} alt="" />
      <div className="popup-section-1">
        <img src={Logo} style={{ width: "50px", height: "50px" }} />
        <div className="popup-section-1-2">
          <div id="popup-section-1-2-1">
            {" "}
            <h3>$127.00</h3>{" "}
          </div>
          <div id="popup-section-1-2-2">
            {" "}
            <h3>Connected Wallet 0.43DX_564A</h3>{" "}
          </div>
        </div>
      </div>
      <div className="popup-section-2">
        <div className="popup-section-21">
          <div id="popup-section-2-1">
            <h2>Experted BNB Tokens</h2>
            <h1>0.5 BNB*</h1>
            <h5 id="The-value-text-popup">
              The value provided is estimated ammount and is liable to change
            </h5>
          </div>
          <div id="popup-section-2-1">
            <h2>Claimable BNB Tokens</h2>
            <h1>0.5 BNB</h1>
          </div>
        </div>

        <div id="claim-now-btn">
          <button>CLAIM NOW</button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;
