import React from "react";

const Hobby = props => {
  return (
    <div className="fillPage_section_StepFiveContainer">
      <div
        className="stepFive_deleteBtn"
        // delet experience
        onClick={e => props.delete(props.number, e)}
      >
        <i className="fas fa-times" />
      </div>

      <div className="stepFive_hobby">
        <i className="fas fa-skiing" />
      </div>

      <input
        type="text"
        placeholder="Hobby"
        id="input-hobby"
        name={props.number} // element number
        autoComplete="off"
        value={props.informations[props.number].hobby} // information about hobby
        onChange={e => props.informationValue(e)} // information about hobby
      />
    </div>
  );
};

export default Hobby;
