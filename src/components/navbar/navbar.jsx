import React, { useEffect, useState } from "react";
import "./navbar.css";
import NavBarDesktop from "./navbar-desktop/navbar-desktop";
import NavBarMobile from "./navbar-mobile/navbar-mobile";
const NavBar = () => {
  

  return (
      <div id="nav-bar-main">
        <div id="nav-bar-main-desktop-view">
          <NavBarDesktop />
        </div>
        <div id="nav-bar-main-mobile-view">
          <NavBarMobile />
        </div>

      </div>
  
    );
};

export default NavBar;
