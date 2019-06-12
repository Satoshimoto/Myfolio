import React from "react";

import Skill from "./Skill";
import AddButton from "./AddButton";

class StepFour extends React.Component {
  state = {
    skills: this.props.skills
  };
  render() {
    let elements = this.state.skills.map(item => (
      <Skill
        key={item.id} //unique key
        number={item.id} // element number
        delete={this.props.deleteExperience} // function to delete experienece
        informations={this.state.skills} // information about skills
        informationValue={this.props.informationValue} // function to set information about skills
        lang={this.props.lang} // information about active language
      />
    ));
    return (
      <>
        <div className="stepFour_mainContainer">
          <h3>{this.props.lang === "Polski" ? "Umiejętności" : "Skills"}</h3>
          <p style={{ color: "green" }}>
            {this.props.lang === "Polski"
              ? "Możesz dodać więcej informacji na temat swoich umiejętności oraz je edytować."
              : "You can add more information about your skills and you can change vlue"}
          </p>
          {elements}
        </div>

        <AddButton
          onClick={this.props.addExperience} // funtion add new experienece
          text={
            this.props.lang === "Polski"
              ? "Dodaj umiejętność"
              : "Add next skill"
            // text inside button
          }
          id="stepFour_add_skillsBtn"
        />
      </>
    );
  }
}

export default StepFour;
