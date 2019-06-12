import React from "react";
import { Link } from "react-router-dom";
import fillCvImg from "../../image/fill_cv_img.png";
import "../../style/FillCvSection/FillCvSection.scss";

const FillCv = props => {
  return (
    <>
      <h2 className="fillCv_section_mainHeader">
        {props.lang === "Polski" ? "Nie trać czasu !" : "Don't waste your time"}
      </h2>
      <div>
        <img src={fillCvImg} alt="Man sitting in front of laptop" />
      </div>

      <div>
        <p>
          {props.lang === "Polski"
            ? "Dobre Cv to duża część sukcesu aby dostać pracę. Nie trać szansy na dostanie świetnej pracy tylko dlatego, że masz staro-modne i mało estetyczne Cv. Wybierz szablon i uzupełnij go."
            : "Good resume is a large part of success to get a job. Don't lose oportunity to get great job just because you have old fanishioned or not estetic CV."}
        </p>
        <Link
          to={props.lang === "Polski" ? "wygeneruj" : "/fill-your-cv"}
          className="fillCv_section_button"
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
        >
          {props.lang === "Polski" ? "Uzupełnij CV" : "Create CV"}
        </Link>
      </div>
    </>
  );
};

export default FillCv;
