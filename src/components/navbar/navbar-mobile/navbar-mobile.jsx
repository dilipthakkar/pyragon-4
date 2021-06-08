import React, { useEffect, useState } from "react";
import Logo from "../../../Pyragon/PyraGon.png";
import Twitter from "../../../Pyragon/twitter-svgrepo-com.svg" ;
import Email from "../../../Pyragon/email-mail-svgrepo-com.svg" ;
import TeleGeam from "../../../Pyragon/telegram-svgrepo-com.svg" ;
import Bitcoin from "../../../Pyragon/coins/bitcoin (1).png" ;
import Modal2 from "../../modals/modal2/Modal2"; 
import "./navbar-mobile.css";
import MenuOpen from "../../../images/menu-icon-1.png";
import MenuClose from "../../../images/menu-icon-2.png";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
const NavBarMobile = () => {
  // const [openModal1 , setOpenModal1] = useState(false);
  const [openModal2 , setOpenModal2] = useState(false);
  const [open , setOpen] = useState(false);

  let dashboard ;
  let social ;
  let navGroup;

  useEffect(()=>{
    dashboard = document.getElementById("dashboard-mobile");
    social = document.getElementById("social-mobile");
    navGroup = document.getElementById("nav-links-gorup-mobile");
  });

  const onOpen = ()=>{
    if(!open){
      dashboard.style.display = "flex";
      social.style.display = "flex";
      navGroup.style.display = "flex";
      console.log(open);
      setOpen(!open);
    }else{
      dashboard.style.display = "none";
      social.style.display = "none";
      navGroup.style.display = "none";
  
      setOpen(!open);
      console.log(open);
    }
  }
  


  // const HandleModal1 = ()=>{
  //   setOpenModal1(true);
  //   onOpen();
  // }
  const HandleModal2 = ()=>{
    setOpenModal2(true);
    onOpen();
    


  }

  return (
    <div id="nav-bar-mobile" className="nav-bar-mobile">
      
      
      
      <div id="nav-bar-mobile-small">

      <div id="title-mobile">
        <img alt="" src={Logo} style={{width : "40px" , height : "40px" , marginRight : "10px"}}/>
        PYRAGON
      </div>
      <button id="toggle-nav-menu" onClick={()=>onOpen()}>
        <img src={open ? MenuClose : MenuOpen} style={{width : "100%" , height : "100%"}}/>
      </button>
      </div>
      {/* <div id="nav-bar-modal1-wrapper">
      <Modal1 isOpen = {openModal1} setIsOpen={setOpenModal1}/>

</div> */}
      <div id="nav-bar-modal1-wrapper">
      <Modal2 isOpen = {openModal2} setIsOpen={setOpenModal2}/>

</div>
    

      <div id="nav-links-gorup-mobile">
        <a class="nav-link-mobile">
          <Link to="/about" style={{color : "white" , textDecoration : "none"}}>ABOUT</Link>
          </a>

        <a class="nav-link-mobile" onClick={HandleModal2}>TOKENOMICS</a>

        <a class="nav-link-mobile" href="#main-container-our-team">TEAM</a>

        <a class="nav-link-mobile" href="#container-footer">CONTACT</a>

        <a class="nav-link-mobile" href="#document-main-container">WHITE PAPER</a>
      </div>

      <div id="social-mobile">
        <a class="social-link-mobile">
          <img src={TeleGeam} style={{width : "30px" , height : "30px"}}/>
        </a>
        <a class="social-link-mobile">
          <img src={Email} style={{width : "30px" , height : "30px"}}/>
        </a>
        <a class="social-link-mobile">
          <img src={Twitter} style={{width : "30px" , height : "30px"}}/>
        </a>
        <a class="socail-link-mobile">
          <img alt="first" src="https://www.citypng.com/public/uploads/preview/-51614559578zadctkzxte.png" style={{width : "30px" , height : "30px"}}/>
          
        </a>
      </div>
      <div id="dashboard-mobile">
        <button>BUY TOKENS</button>
      </div>

      
    </div>
  );
};

export default NavBarMobile;
