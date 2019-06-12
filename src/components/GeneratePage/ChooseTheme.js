import React from "react";
import "../../style/GeneratePage/ChooseTheme.scss";

const ChooseTheme = props => {
  return (
    <>
      <div className="chooseTheme_alertPage">
        <h3>
          {props.lang === "Polski"
            ? "Nie możesz wygenerować CV bo nie wybrałeś żadnego szablonu. Najpierw wybierz szablon, następnie go uzupełnij i dopiero wygeneruj CV."
            : "You can't generate CV because you didn't select any CV template. Go select cv template and fill your CV. After that go generate your CV."}
        </h3>
      </div>
    </>
  );
};

export default ChooseTheme;
