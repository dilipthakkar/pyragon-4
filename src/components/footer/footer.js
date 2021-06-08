import React from "react";
import "./footer.css";
import Image from "../../Pyragon/PyraGon.png"
import Twitter from "../../Pyragon/twitter-svgrepo-com.svg" ;
import Messanger from "../../Pyragon/messenger.png" ;

import TeleGeam from "../../Pyragon/telegram-svgrepo-com.svg" ;

const Footer = () => {
  return (
    <footer>
      <div className="container-footer" id="container-footer">
        <div id="heading-footer-second-container-1">
          <span> <img src={Image} style={{width : "40px" , height : "40px"}}/> </span>
          <span id="PYRA-heading">PYRAGON</span>
          <h6 style={{color:"rgb(156, 147, 147)" , fontSize : "15px"}}>&copy; PYRAGON 2021</h6>
        </div>
        <div id="heading-footer-second-container-2">
        <div className="heading-footer">
          <h3><a href="">Home</a></h3>
          <h3><a href="/about">About</a></h3>
          <h3><a href="#work-main-container">How is Works</a></h3>
          <h3><a href="#roadmap-main-container">Roadmap</a></h3>
        </div>
        <div className="card-footer">
          <h3><a href="">Card</a></h3>
          <h3><a href="">token Sale</a></h3>
          <h3><a href="#document-main-container">White paper</a></h3>
          <div id="card-footer-icons">
            <a><img src={TeleGeam} style={{width : "20px" , height : "20px"}}/></a>
            <a><img src={'https://www.citypng.com/public/uploads/preview/-51610296211acceqr2np2.png'} style={{width : "20px" , height : "20px"}}/></a>
            <a><img src={Twitter} style={{width : "20px" , height : "20px"}}/></a>
          </div>
        </div>
        <div className="footer--contact--info">
          <h3>Contact us with any questions</h3>
          <h3>ico@site.io</h3>
          <h3>FAQ</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms and Consitions</h3>
        </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
