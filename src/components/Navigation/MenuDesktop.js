import React from "react";
import "../../style/Navigation/MenuDesktop.scss";
import { NavLink } from "react-router-dom";

const MenuDesktop = props => {
  return (
    <>
      <div className="navigation_section_desktopMenu">
        <ul>
          <NavLink
            to="/"
            onClick={() => {
              document.documentElement.scrollTop = 0;
            }}
          >
            <li> {props.lang === "Polski" ? "Strona główna" : "Home"}</li>
          </NavLink>
          <NavLink
            to={props.lang === "Polski" ? "/szablony" : "/theme"}
            onClick={() => {
              document.documentElement.scrollTop = 0;
            }}
          >
            <li> {props.lang === "Polski" ? "Szablony" : "Cv theme"}</li>
          </NavLink>
          <NavLink
            to={props.lang === "Polski" ? "/uzupelnij-cv" : "/fill-your-cv"}
            onClick={() => {
              document.documentElement.scrollTop = 0;
            }}
          >
            <li>{props.lang === "Polski" ? "Uzupełnij CV" : "Fill your CV"}</li>
          </NavLink>
          <NavLink
            to={props.lang === "Polski" ? "/wygeneruj" : "/generate"}
            onClick={() => {
              document.documentElement.scrollTop = 0;
            }}
          >
            <li> {props.lang === "Polski" ? "Wygeneruj CV" : "Generate CV"}</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default MenuDesktop;
