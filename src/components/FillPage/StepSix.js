import React from "react";
import "../../style/FillPage/StepSix.scss";
import { Link } from "react-router-dom";

const StepSix = props => {
  return (
    <div className="fillPage_section_stepSixContainer">
      <h3>{props.lang === "Polski" ? "To tyle !" : "That's it !"}</h3>
      <p>
        {props.lang === "Polski"
          ? "Teraz możesz wygenerować swoje Cv ze wszystkimi informacjami jakie zostały umieszczone."
          : "Now you can generate your CV with all information you put."}
      </p>
      <p>
        {props.lang === "Polski"
          ? "Możesz kliknąć guzik poniżej i wygenerować swoje cv lub w menu przejść do zakładki 'Wygeneruj Cv'."
          : "You can click button below and go generate your CV or click 'Generate Cv' in menu."}
      </p>

      {/* button to genereate cv */}
      <Link
        to={props.lang === "Polski" ? "wygeneruj" : "generate"}
        className="stepSix_generateCvBtn"
      >
        {props.lang === "Polski" ? "Wygeneruj Cv" : "Generate your Cv"}
      </Link>

      <p>
        {props.lang === "Polski"
          ? "O i jeszcze jedna rzecz, jeżeli chcesz zmienić szablon swojego CV nie musisz podawać znowu swoich informacji. Wystarczy przejść do strony z szablonami i wybrać inny, a Twoje informacje zostaną automatycznie tam umieszczone."
          : "Oh and one more thing, if you would like to change your theme you don't have to put all your date agian. Just change themeand thats it."}
      </p>

      <p>
        {props.lang === "Polski"
          ? "Natomiast jeżeli chciałbyś wyczyścić wszystkie informacje jakie zostały wprowadzone kliknij guzik poniżej 'Wyczyść informacje'"
          : "But if you want clear your date click button 'clear my date'"}
      </p>

      {/* button to clear user informations */}
      <div className="stepSix_clearDateBtn" onClick={props.clearDate}>
        {props.lang === "Polski" ? "Wyczyść informacje" : "Clear all my date"}
      </div>

      {/* popup showing that all information are deleted */}
      <p className="stepSix_clearDateMessage">
        {props.lang === "Polski"
          ? "Wszystkie Twoje dane zostały wyczyszczone"
          : "All your date are clared"}
      </p>
    </div>
  );
};

export default StepSix;
