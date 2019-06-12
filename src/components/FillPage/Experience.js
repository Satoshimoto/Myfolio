import React from "react";

const Experience = props => {
  return (
    <div className="fillPage_section_StepTwoContainer">
      <div
        className="stepTwo_deleteBtn"
        // delete experience
        onClick={e => props.delete(props.number, e)}
      >
        <i className="fas fa-times" />
      </div>

      {/* information about year */}
      <div className="stepTwo_date">
        <div>
          <i className="far fa-calendar-alt" />
        </div>

        <input
          id="input-job-date"
          name={props.number} // number of element
          type="text"
          placeholder={
            props.lang === "Polski" ? "Okres pracy" : "Period of work"
          }
          autoComplete="off"
          value={props.informations[props.number].date} // information about date
          readOnly //can't be changed
        />
      </div>

      {/* information about company */}
      <div className="stepTwo_company">
        <div>
          <i className="fas fa-building" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Nazwa firmy" : "Company name"}
          autoComplete="off"
          id="input-job-company"
          name={props.number} // number of element
          value={props.informations[props.number].company} // information about company name
          readOnly //can't be changed
        />
      </div>

      {/* information about position */}
      <div className="stepTwo_position">
        <div>
          <i className="fas fa-user-tie" />
        </div>

        <input
          type="text"
          placeholder={props.lang === "Polski" ? "Pozycja" : "Job position"}
          autoComplete="off"
          id="input-job-position"
          name={props.number} // element number
          value={props.informations[props.number].position} // information about position
          readOnly //can't be changed
        />
      </div>
    </div>
  );
};

export default Experience;
