import React from "react";
import "../../style/FillPage/StepTwo.scss";
import AddButton from "./AddButton";
import Experience from "./Experience";

class StepTwo extends React.Component {
  state = {
    experience: this.props.experience
  };

  render() {
    let elements = this.state.experience.map(item => (
      <Experience
        key={item.id} //unique key
        number={item.id} // element number
        delete={this.props.deleteExperience} // function to delete experience
        informations={this.state.experience} // information about exoerience
      />
    ));

    return (
      <>
        <div className="stepTwo_mainContainer">
          <h3>
            {this.props.lang === "Polski" ? "Doświadczenie" : "Experience"}
          </h3>

          <p style={{ color: "red" }}>
            {this.props.lang === "Polski"
              ? "Możesz dodać więcej indormacji na temat doświadczenia ale nie możesz zmieniać ich wartości."
              : "You can add more experience but you can't change value."}
          </p>
          <div>{elements.length ? elements : null}</div>
        </div>

        <AddButton
          onClick={this.props.addExperience} // function add experience
          text={
            this.props.lang === "Polski"
              ? "Dodaj doświadczenie"
              : "Add next experience"
            // text inside button
          }
          id="stepTwo_add_experienceBtn"
        />
      </>
    );
  }
}

export default StepTwo;
