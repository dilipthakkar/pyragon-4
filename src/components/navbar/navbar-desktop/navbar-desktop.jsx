import React, { useEffect, useState } from "react";
import Logo from "../../../Pyragon/PyraGon.png";
import Twitter from "../../../Pyragon/twitter-svgrepo-com.svg" ;
import Email from "../../../Pyragon/email-mail-svgrepo-com.svg" ;
import TeleGeam from "../../../Pyragon/telegram-svgrepo-com.svg" ;
import Bitcoin from "../../../Pyragon/coins/bitcoin (1).png" ;
import Modal2 from "../../modals/modal2/Modal2"; 
import "./navbar-desktop.css";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
const NavBarDesktop = () => {
  const [openModal2 , setOpenModal2] = useState(false);
  


  const HandleModal2 = ()=>{
    setOpenModal2(true);

  }

  return (
    <div id="nav-bar" className="nav-bar">
      
      
      
      <div id="title">
        <img alt="" src={Logo} style={{width : "40px" , height : "40px" , marginRight : "10px"}}/>
        PYRAGON
      </div>
      <div style={{display : "none"}}>
       
        <div id="nav-bar-modal2-wrapper">
        <Modal2 isOpen = {openModal2} setIsOpen={setOpenModal2}/>

        </div>
    
      </div>
      

      <div id="nav-links-gorup">
        <a class="nav-link" >
          <Link to="/about" style={{color : "white" , textDecoration : "none"}}>ABOUT </Link>
          
          </a>

        <a class="nav-link" onClick={HandleModal2}>TOKENOMICS</a>

        <a class="nav-link">TEAM</a>

        <a class="nav-link">CONTACT</a>

        <a class="nav-link">WHITE PAPER</a>
      </div>

      <div id="social">
        <a class="social-link">
          <img src={TeleGeam} style={{width : "20px" , height : "20px"}}/>
        </a>
        <a class="social-link">
          <img src={Email} style={{width : "20px" , height : "20px"}}/>
        </a>
        <a class="social-link">
          <img src={Twitter} style={{width : "20px" , height : "20px"}}/>
        </a>
        <a class="socail-link">
          <img alt="first" src="https://www.citypng.com/public/uploads/preview/-51614559578zadctkzxte.png" style={{width : "20px" , height : "20px"}}/>
          
        </a>
      </div>
      <div id="dashboard">
        <button>BUY TOKENS</button>
      </div>
    </div>
  );
};

export default NavBarDesktop;
