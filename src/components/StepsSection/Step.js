import React from "react";
import "../../style/Steps/Step.scss";

const Step = props => {
  return (
    <div className="steps_section_stepContainer">
      <h3 className="steps_section_stepHeader">{props.header}</h3>
      <img className="steps_section_image" src={props.img} alt={props.altImg} />
      <p>{props.description}</p>
    </div>
  );
};

export default Step;
