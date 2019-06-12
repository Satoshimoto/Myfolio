import React from "react";
import "../../style/ThemeSection/ThemeSection.scss";
import { Link } from "react-router-dom";
import BorderTop from "./BorderTop";

const ThemeSection = props => {
  return (
    <>
      <BorderTop />

      <i className="fas fa-graduation-cap themeSection_section_iconOne" />
      <i className="fas fa-user-graduate themeSection_section_iconTwo" />
      <i className="fas fa-award themeSection_section_iconThree" />
      <i className="fas fa-tasks themeSection_section_iconFour" />
      <i className="far fa-id-card themeSection_section_iconFive" />
      <i className="far fa-star themeSection_section_iconSix" />
      <i className="far fa-clock themeSection_section_iconSeven" />
      <i className="fas fa-chart-line themeSection_section_iconEight" />
      <i className="fas fa-laptop themeSection_section_iconNine" />
      <i className="fas fa-mobile-alt themeSection_section_iconTen" />

      <div className="themeSection_section_header">
        <h3>
          {props.lang === "Polski"
            ? "Kliknij i wybierz szablon swojego CV"
            : "Click and choose CV template."}
        </h3>
      </div>

      {/* Button link to /theme  */}
      <Link
        to={props.lang === "Polski" ? "/szablony" : "/theme"}
        className="themeSection_section_button"
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      >
        {props.lang === "Polski" ? "tutaj" : "here"}
      </Link>
    </>
  );
};

export default ThemeSection;
