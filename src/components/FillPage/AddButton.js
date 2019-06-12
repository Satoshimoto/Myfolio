import React from "react";

const AddButton = props => {
  return (
    <>
      <div
        className="addBtn"
        id={props.id}
        // Adding new experience
        onClick={e => props.onClick(e)}
      >
        <p>{props.text}</p>
        <div>
          <i className="fas fa-plus-circle" />
        </div>
      </div>
    </>
  );
};

export default AddButton;
