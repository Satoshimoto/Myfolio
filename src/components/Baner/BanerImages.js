import React from "react";
import "../../style/Baner/BanerImages.scss";
import banerOne from "../../image/corpo1.jpg";
import banerTwo from "../../image/corpo2.jpg";
import banerThree from "../../image/corpo3.jpg";

const BanerImages = props => {
  return (
    <>
      {/* Slide number 1 */}
      <div
        style={{ backgroundImage: `url(${banerOne})` }}
        className="baner_section_image"
      >
        <div className="baner_section_header">
          <h2>
            {props.lang === "Polski"
              ? "Strona pokazuje moje umiejętności"
              : "Website shows my programing skills"}
          </h2>
        </div>
      </div>
      {/* Slide number 2 */}
      <div
        style={{ backgroundImage: `url(${banerThree})` }}
        className="baner_section_image"
      >
        <div className="baner_section_header">
          <h2>
            {props.lang === "Polski"
              ? "Sprawdz mojego githuba i inne projekty"
              : "Checkout my GitHub and my other projects"}
          </h2>
        </div>
      </div>
      {/* Slide number 3 */}
      <div
        style={{ backgroundImage: `url(${banerTwo})` }}
        className="baner_section_image"
      >
        <div className="baner_section_header">
          <h2>
            {props.lang === "Polski"
              ? "Skontaktuj się ze mną jeżeli poszukujesz programisty"
              : "Contact me if you are looking for a programmer"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default BanerImages;
