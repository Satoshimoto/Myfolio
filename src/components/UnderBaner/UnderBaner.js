import React from "react";
import "../../style/UnderBaner/UnderBaner.scss";

const UnderBaner = props => {
  return (
    <>
      <div className="underBaner_section_elementOne">
        <i className="far fa-list-alt" />
        <h3>{props.lang === "Polski" ? "Łatwo" : "Simple"}</h3>
      </div>
      <div className="underBaner_section_elementTwo">
        <i className="far fa-clock" />
        <h3>{props.lang === "Polski" ? "Szybko" : "Quick"}</h3>
      </div>
      <div className="underBaner_section_elementThree">
        <i className="fas fa-user-tie" />
        <h3>{props.lang === "Polski" ? "Profesjonalnie" : "Professional"}</h3>
      </div>
    </>
  );
};

export default UnderBaner;
