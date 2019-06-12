import React from "react";

import "../../style/FillPage/RightArrow.scss";

const RightArrow = props => {
  return (
    <>
      <div
        className="fillPage_section_rightArrow"
        // hide arrow if it is last step or if user did't choose any template
        style={
          props.stepNumber === 6
            ? { opacity: "0" }
            : props.template === ""
            ? { opacity: "0" }
            : { opacity: "1" }
        }
        id="right-arrow-fillCv"
        // next page
        onClick={props.onClick}
      >
        <i className="fas fa-angle-right" />
      </div>
    </>
  );
};

export default RightArrow;
