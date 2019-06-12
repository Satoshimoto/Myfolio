import React from "react";
import "../../style/Navigation/LogoMenu.scss";
import logo from "../../image/logo.png";
import { NavLink } from "react-router-dom";

const LogoMenu = () => {
  return (
    <>
      <NavLink
        exact
        to="/"
        className="navigation_section_logo"
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      >
        <img src={logo} alt="Website logo" />
      </NavLink>
    </>
  );
};

export default LogoMenu;
