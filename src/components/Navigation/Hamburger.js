import React from "react";
import "../../style/Navigation/Hamburger.scss";

const Hamburger = props => {
  return (
    <div
      className="navigation_section_hamburger"
      onClick={props.onClick} //open mobile menu, humburger animation
    >
      <div className="navigation_section_hamburgerSection">
        <div className="hamburgerSection_first" />
        <div className="hamburgerSection_second" />
        <div className="hamburgerSection_third" />
      </div>
    </div>
  );
};

export default Hamburger;
