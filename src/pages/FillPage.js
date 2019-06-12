import React from "react";
import "../style/FillPage/FillPage.scss";
import StepOne from "../components/FillPage/StepOne";
import StepTwo from "../components/FillPage/StepTwo";
import StepThree from "../components/FillPage/StepThree";
import StepFour from "../components/FillPage/StepFour";
import StepFive from "../components/FillPage/StepFive";
import StepSix from "../components/FillPage/StepSix";

import LeftArrow from "../components/FillPage/LeftArrow";
import RightArrow from "../components/FillPage/RightArrow";

const FillPage = props => {
  return (
    <section className="fillPage_section">
      <div className="fillPage_section_container">
        {props.template.length ? (
          props.stepNumber === 1 ? (
            <StepOne
              lang={props.lang} //info about active language
            />
          ) : props.stepNumber === 2 ? (
            <StepTwo
              addExperience={props.addExperience} // function adding new (experience, education, skills, hobby) - fillPage
              deleteExperience={props.deleteExperience} // function deleting (experience, education, skills, hobby) - fillPage
              experience={props.experience} // info about user experience - can't be changed
              informationValue={props.informationValue} // funciton saving information into inputs
              lang={props.lang} //info about active language
            />
          ) : props.stepNumber === 3 ? (
            <StepThree
              education={props.education} // info about user education
              deleteExperience={props.deleteExperience} // function deleting (experience, education, skills, hobby) - fillPage
              addExperience={props.addExperience} // function adding new (experience, education, skills, hobby) - fillPage
              informationValue={props.informationValue} // funciton saving information into inputs
              lang={props.lang} //info about active language
            />
          ) : props.stepNumber === 4 ? (
            <StepFour
              skills={props.skills} // info about user skills
              informationValue={props.informationValue} // funciton saving information into inputs
              deleteExperience={props.deleteExperience} // function deleting (experience, education, skills, hobby) - fillPage
              addExperience={props.addExperience} // function adding new (experience, education, skills, hobby) - fillPage
              lang={props.lang} //info about active language
            />
          ) : props.stepNumber === 5 ? (
            <StepFive
              hobby={props.hobby} // info about user hooby
              informationValue={props.informationValue} // funciton saving information into inputs
              deleteExperience={props.deleteExperience} // function deleting (experience, education, skills, hobby) - fillPage
              addExperience={props.addExperience} // function adding new (experience, education, skills, hobby) - fillPage
              lang={props.lang} //info about active language
            />
          ) : props.stepNumber === 6 ? (
            <StepSix
              clearDate={props.clearDate} // clear user data function - fillPage step 6
              lang={props.lang} //info about active language
            />
          ) : null
        ) : (
          <h2>
            {props.lang === "Polski"
              ? "Zanim zaczniesz wypełniać CV danymi musisz najpier wybrać szablon Cv."
              : "Sorry but first you have to choose your template before you fill your CV"}
          </h2>
        )}

        <div className="fillPage_section_arrowsContainer">
          <LeftArrow
            stepNumber={props.stepNumber} // number of active step
            onClick={e => props.arrowOnClick(e)} // function adding or subtracting to step
          />
          <p style={{ fontWeight: "bold" }}>
            {props.lang === "Polski"
              ? `Strona ${props.stepNumber}`
              : `Page ${props.stepNumber}`}
          </p>
          <RightArrow
            stepNumber={props.stepNumber} // number of active step
            onClick={e => props.arrowOnClick(e)} // function adding or subtracting to step
            template={props.template} // informtion about active template
          />
        </div>
      </div>
    </section>
  );
};

export default FillPage;
