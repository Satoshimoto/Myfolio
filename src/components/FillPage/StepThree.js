import React from "react";
import "../../style/FillPage/StepThree.scss";

import Education from "./Education";
import AddButton from "./AddButton";

class StepThree extends React.Component {
  state = {
    education: this.props.education
  };
  render() {
    let elements = this.state.education.map(item => (
      <Education
        key={item.id}
        number={item.id}
        delete={this.props.deleteExperience}
        informations={this.state.education}
        informationValue={this.props.informationValue}
        lang={this.props.lang}
      />
    ));
    return (
      <>
        <div className="stepThree_mainContainer">
          <h3>{this.props.lang === "Polski" ? "Edukacja" : "Education"}</h3>
          <p style={{ color: "green" }}>
            {this.props.lang === "Polski"
              ? "Możesz dodać więcej informacji na temat edukacji oraz możesz je edytować."
              : "You can add more education and you can change value"}
          </p>
          <div>{elements}</div>
        </div>

        <AddButton
          onClick={this.props.addExperience} //add experience
          text={this.props.lang === "Polski" ? "Dodaj" : "Add next education"}
          id="stepThree_add_educationBtn"
        />
      </>
    );
  }
}

export default StepThree;
