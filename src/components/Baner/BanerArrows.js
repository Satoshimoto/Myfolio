import React from "react";
import "../../style/Baner/BanerArrows.scss";

const BanerArrows = props => {
  return (
    <>
      <div className="baner_section_arrowLeft" onClick={e => props.onClick(e)}>
        <i className="fas fa-chevron-left" />
      </div>
      <div className="baner_section_arrowRight" onClick={e => props.onClick(e)}>
        <i className="fas fa-chevron-right" />
      </div>
    </>
  );
};

export default BanerArrows;
