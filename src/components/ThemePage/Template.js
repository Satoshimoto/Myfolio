import React from "react";

const Template = props => {
  return (
    <>
      <div
        className="themePage_section_templateContainer"
        onClick={props.onClick} // select active templete
        id={props.number}
        style={
          props.template.length
            ? parseInt(props.template[0]) === props.number
              ? { backgroundColor: "rgb(117, 219, 89)" }
              : null
            : null
        }
      >
        <img src={props.img} alt="CV template" />
      </div>
    </>
  );
};

export default Template;
