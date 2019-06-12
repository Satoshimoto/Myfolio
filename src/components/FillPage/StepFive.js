import React from "react";
import "../../style/FillPage/StepFive.scss";

import Hobby from "./Hobby";
import AddButton from "./AddButton";

class StepFive extends React.Component {
  state = {
    hobby: this.props.hobby
  };
  render() {
    let elements = this.state.hobby.map(item => (
      <Hobby
        key={item.id} // unique key
        number={item.id} // element number
        delete={this.props.deleteExperience} // function to delete experienece
        informations={this.state.hobby} // information about hobby
        informationValue={this.props.informationValue} // function to set information about hobby
        lang={this.props.lang} // information about active language
      />
    ));
    return (
      <>
        <div className="stepFive_mainContainer">
          <h3>Hobby</h3>
          <p style={{ color: "green" }}>
            {this.props.lang === "Polski"
              ? "Możesz dodać więcej informacji na temat hobby oraz je edytować"
              : "You can add more hobbies and you can change vlue"}
          </p>
          {elements}
        </div>

        <AddButton
          onClick={this.props.addExperience} // function to add new experience
          text={
            this.props.lang === "Polski"
              ? "Dodaj więcej hobby"
              : "Add more hobbies"
          } // text inside button
          id="stepFive_add_hobbyBtn"
        />
      </>
    );
  }
}

export default StepFive;
