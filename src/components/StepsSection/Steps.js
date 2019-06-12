import React from "react";
import "../../style/Steps/Steps.scss";
import Step from "./Step";
import step1 from "../../image/cvTheme1.jpg";
import step2 from "../../image/cvThemeFill1.jpg";

const Steps = props => {
  return (
    <>
      <h3 className="step_section_mainHeader">
        {props.lang === "Polski"
          ? "Stwórz swoje CV w 3 krokach"
          : "Create your CV at 3 steps"}
      </h3>
      <Step
        header={props.lang === "Polski" ? "Krok 1" : "Step 1"}
        img={step1}
        alt={props.lang === "Polski" ? "szablon cv" : "cv template"}
        description={
          props.lang === "Polski"
            ? "Wybierz swój szablon CV"
            : "Chose your CV template"
        }
      />
      <Step
        header={props.lang === "Polski" ? "Krok 2" : "Step 2"}
        img={step2}
        alt={props.lang === "Polski" ? "szablon cv" : "cv template"}
        description={
          props.lang === "Polski"
            ? "Uzupełnij szblon danymi"
            : "Put your data into template"
        }
      />
      <Step
        header={props.lang === "Polski" ? "Krok 3" : "Step 3"}
        img={step2}
        alt={props.lang === "Polski" ? "szablon cv" : "cv template"}
        description={
          props.lang === "Polski"
            ? "Zapisz szablon jako pdf"
            : "Save your CV as a pdf file"
        }
      />
    </>
  );
};

export default Steps;
