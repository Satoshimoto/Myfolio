import React from "react";

const Education = props => {
  return (
    <div className="fillPage_section_StepThreeContainer">
      <div
        className="stepThree_deleteBtn"
        // delete experience
        onClick={e => props.delete(props.number, e)}
      >
        <i className="fas fa-times" />
      </div>

      {/* infomration about year */}
      <div className="stepThree_date">
        <div>
          <i className="far fa-calendar-alt" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Rok" : "Date"}
          autoComplete="off"
          id="input-education-date"
          name={props.number} // number of element
          value={props.informations[props.number].date} // set education information - year
          onChange={e => props.informationValue(e)} // education information
        />
      </div>

      {/* infomration about school name*/}
      <div className="stepThree_school">
        <div>
          <i className="fas fa-school" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Nazwa szkoły" : "School name"}
          autoComplete="off"
          id="input-education-school"
          name={props.number} // number of element
          value={props.informations[props.number].school} // set education information - school name
          onChange={e => props.informationValue(e)} // education information
        />
      </div>

      {/* infomration about title */}
      <div className="stepThree_title">
        <div>
          <i className="fas fa-graduation-cap" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Tytuł" : "Title"}
          autoComplete="off"
          id="input-education-title"
          name={props.number} // number of element
          value={props.informations[props.number].title} // set education information - title
          onChange={e => props.informationValue(e)} // education information
        />
      </div>

      {/* infomration about profile,way */}
      <div className="stepThree_way">
        <div>
          <i className="fas fa-user-tie" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Kierunek" : "Profile"}
          autoComplete="off"
          id="input-education-way"
          name={props.number} // number of element
          value={props.informations[props.number].way} // set education information - profile,way
          onChange={e => props.informationValue(e)} // education information
        />
      </div>
    </div>
  );
};

export default Education;
