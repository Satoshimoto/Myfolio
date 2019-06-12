import React from "react";

import "../..//style/FillPage/StepFour.scss";

const Skill = props => {
  return (
    <div className="fillPage_section_StepFourContainer">
      <div
        className="stepFour_deleteBtn"
        //delete experience
        onClick={e => props.delete(props.number, e)}
      >
        <i className="fas fa-times" />
      </div>

      {/* information about skill */}
      <div className="stepFour_skill">
        <div>
          <i className="far fa-check-circle" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Umiejętności" : "Skill name"}
          id="input-skill-skillName"
          name={props.number}
          value={props.informations[props.number].skillName} // information about skill
          onChange={e => props.informationValue(e)} // set skill
          autoComplete="off"
        />
      </div>

      {/* information about skill's level */}
      <div className="stepFour_level">
        <div>
          <i className="fas fa-graduation-cap" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Poziom" : "Skill level"}
          id="input-skill-level"
          name={props.number}
          value={props.informations[props.number].level} // information about skill's level
          onChange={e => props.informationValue(e)} // set skill's level
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Skill;
