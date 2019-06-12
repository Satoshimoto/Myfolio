import React from "react";
import "../../style/FillPage/StepOne.scss";

const StepOne = props => {
  return (
    <div className="stepOne_containers">
      <h3>
        {props.lang === "Polski"
          ? "Przeczytaj zanim zaczniesz uzupełniać CV !"
          : "Read before you start filling CV."}
      </h3>
      <p>
        {props.lang === "Polski"
          ? "Ta strona jest tylko przykładem moich umiejętności programistycznych. Dla swojego bezpieczeństwa nie podawaj swoich prawdziwych danych personalnym. Ze względów bezpieczeństwa niektóre miejsca są nieedytowalne. Jeżeli mimo to postanowisz wpisać swoje dane personalne akceptujesz, że robisz to na własne ryzyko."
          : "This website is exmaple of my programming skills, for your secure don't use your real information. If you put your real information you acctept that you do it for your own risk."}
      </p>
    </div>
  );
};

export default StepOne;
