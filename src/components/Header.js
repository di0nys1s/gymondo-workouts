import React from "react";
import menuDashImg from "../assets/images/menu-dash.svg";
import profileImg from "../assets/images/profile.svg";
import logo from "../assets/images/logo.png";
import hamburger from "../assets/images/hamburger.png";

function Header() {
  return (
    <header id="#header">
      <img className="logo" src={logo} alt="logo" />

      <img className="header-right profile" src={profileImg} alt="profile" />
      <img className="header-right dash" src={menuDashImg} alt="dash" />
      <img className="header-right hamburger" src={hamburger} alt="hamburger" />
    </header>
  );
}

export default Header;
