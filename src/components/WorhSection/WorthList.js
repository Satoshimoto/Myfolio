import React from "react";
import "../../style/WorthSection/WorthList.scss";

const WorthList = props => {
  return (
    <>
      <ul className="worth_section_list">
        <li>
          <h3>
            {props.lang === "Polski"
              ? "1. Bo jest całkowicie darmowe"
              : "1. It is totaly for free !"}
          </h3>
          <p>
            {props.lang === "Polski"
              ? "Nie trzeba sie rejestrowac, a wygenerowane pliki nie maja znaku wodnego."
              : " It's absolutly free to use platform. Without register and watermarks."}
          </p>
        </li>
        <li>
          <h3>
            {props.lang === "Polski"
              ? "2. Wiele szbalonów."
              : "2. We have many CV templates"}
          </h3>
          <p>
            {props.lang === "Polski"
              ? "Na stronie znajduję się wiele szablonów które można wybrać."
              : "We have many templates so you can choose best in your opinion"}
          </p>
        </li>
        <li>
          <h3>
            {props.lang === "Polski"
              ? "3. To bardzo proste."
              : "3. It is simple"}
          </h3>
          <p>
            {props.lang === "Polski"
              ? "Strona jest bardzo prosta w użyciu, wystarczy wybrac szablon i uzupelnić kilka informacji i tyle."
              : "It is realy simple, just add your information on specific place and done"}
          </p>
        </li>
        <li>
          <h3>
            {props.lang === "Polski"
              ? "4. Bardzo szybkie"
              : "4. It's realy quick"}
          </h3>
          <p>
            {props.lang === "Polski"
              ? "Nie musisz tracić dużo czasu na dobre Cv. Wystarczy około 5 min aby Twoje CV dobrze się prezentowało."
              : "You don't have to waste your precious time to creator your CV. It is take you around 5 minutes"}
          </p>
        </li>
      </ul>
    </>
  );
};

export default WorthList;
