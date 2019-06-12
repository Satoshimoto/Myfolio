import React from "react";
import "../../style/Footer/Footer.scss";
import BorderTop from "../ThemeSection/BorderTop";

const Footer = props => {
  return (
    <>
      <BorderTop />
      <div className="footer_section_github">
        <a href="https://github.com/Satoshimoto">
          <p>
            {props.lang === "Polski" ? "Mój github " : "My github "}
            <i className="fab fa-github" />
          </p>
        </a>
      </div>

      <div className="footer_section_job">
        <a href="mailto: kontakt@myfolio.pl">
          <p>
            {props.lang === "Polski"
              ? "Jeżli poszukujesz programisty:"
              : "If you are looking for a programer:"}
            <span> {props.lang === "Polski" ? "napisz" : "e-mail me"}</span>
          </p>
        </a>
      </div>
    </>
  );
};

export default Footer;
