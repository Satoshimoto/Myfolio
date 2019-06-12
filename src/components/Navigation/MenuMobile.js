import React from "react";
import "../../style/Navigation/MenuMobile.scss";
import { NavLink } from "react-router-dom";

const MenuMobile = props => {
  return (
    <>
      <div className="navigation_section_mobileMenu">
        <div>
          <ul>
            <NavLink to="/" onClick={props.closeMenu}>
              <li> {props.lang === "Polski" ? "Strona główna" : "Home"}</li>
            </NavLink>
            <NavLink
              to={props.lang === "Polski" ? "/szablony" : "/theme"}
              onClick={props.closeMenu}
            >
              <li> {props.lang === "Polski" ? "Szablony" : "Cv theme"}</li>
            </NavLink>
            <NavLink
              to={props.lang === "Polski" ? "/uzupelnij-cv" : "/fill-your-cv"}
              onClick={props.closeMenu}
            >
              <li>
                {props.lang === "Polski" ? "Uzupełnij CV" : "Fill your CV"}
              </li>
            </NavLink>
            <NavLink
              to={props.lang === "Polski" ? "/wygeneruj" : "/generate"}
              onClick={props.closeMenu}
            >
              <li>
                {props.lang === "Polski" ? "Wygeneruj CV" : "Generate CV"}
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
