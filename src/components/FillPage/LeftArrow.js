import React from "react";
import "../../style/FillPage/LeftArrow.scss";

const LeftArrow = props => {
  return (
    <>
      <div
        className="fillPage_section_leftArrow"
        // hide arrow if it is first step
        style={props.stepNumber === 1 ? { opacity: "0" } : { opacity: "1" }}
        id="left-arrow-fillCv"
        onClick={props.onClick}
      >
        <i className="fas fa-angle-left" />
      </div>
    </>
  );
};

export default LeftArrow;
