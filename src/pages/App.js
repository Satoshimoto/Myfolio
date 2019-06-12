import React from "react";
import "../style/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import MainPage from "../pages/MainPage";
import ThemePage from "../pages/ThemePage";
import Footer from "../components/Footer/Footer";

import FillPage from "../pages/FillPage";
import GeneratePage from "../pages/GeneratePage";

class App extends React.Component {
  state = {
    lang: "Polski",
    activeTemplate: "",
    stepNumber: 1,
    experience: [],
    education: [],
    skills: [],
    hobby: []
  };

  // Select active template - themePage
  handleSelectActiveTemplate = e => {
    let allTemplate = document.querySelectorAll(
      ".themePage_section_templateContainer"
    );
    let active = "";

    [...allTemplate].forEach(item => {
      item.style.backgroundColor = "";
    });

    e.currentTarget.style.backgroundColor = "#75db59";
    active = e.currentTarget.id;
    this.setState({
      activeTemplate: active
    });
  };

  // Next step - FillPage
  handleChangeStepNumber = e => {
    if (e.currentTarget.id === "right-arrow-fillCv") {
      if (this.state.stepNumber >= 6) {
        return null;
      } else {
        this.setState(prevState => ({
          stepNumber: prevState.stepNumber + 1
        }));
      }
    } else {
      if (this.state.stepNumber <= 1) {
        return null;
      } else {
        this.setState(prevState => ({
          stepNumber: prevState.stepNumber - 1
        }));
      }
    }
  };

  // Set data - fillPage
  handleSetPersonalData = e => {
    let experienceInfoCopy = this.state.experience;
    let educationInfoCopy = this.state.education;
    let skillInfoCopy = this.state.skills;
    let hobbyInfoCopy = this.state.hobby;

    switch (e.currentTarget.id) {
      case "input-job-date":
        experienceInfoCopy[e.currentTarget.name].date = e.currentTarget.value;
        this.setState({
          experience: experienceInfoCopy
        });
        break;

      case "input-job-company":
        experienceInfoCopy[e.currentTarget.name].company =
          e.currentTarget.value;
        this.setState({
          experience: experienceInfoCopy
        });
        break;

      case "input-job-position":
        experienceInfoCopy[e.currentTarget.name].position =
          e.currentTarget.value;
        this.setState({
          experience: experienceInfoCopy
        });
        break;

      case "input-education-date":
        educationInfoCopy[e.currentTarget.name].date = e.currentTarget.value;
        this.setState({
          education: educationInfoCopy
        });
        break;

      case "input-education-school":
        educationInfoCopy[e.currentTarget.name].school = e.currentTarget.value;
        this.setState({
          education: educationInfoCopy
        });
        break;

      case "input-education-title":
        educationInfoCopy[e.currentTarget.name].title = e.currentTarget.value;
        this.setState({
          education: educationInfoCopy
        });
        break;

      case "input-education-way":
        educationInfoCopy[e.currentTarget.name].way = e.currentTarget.value;
        this.setState({
          education: educationInfoCopy
        });
        break;

      case "input-skill-skillName":
        skillInfoCopy[e.currentTarget.name].skillName = e.currentTarget.value;
        this.setState({
          skills: skillInfoCopy
        });
        break;

      case "input-skill-level":
        skillInfoCopy[e.currentTarget.name].level = e.currentTarget.value;
        this.setState({
          skills: skillInfoCopy
        });
        break;

      case "input-hobby":
        hobbyInfoCopy[e.currentTarget.name].hobby = e.currentTarget.value;
        this.setState({
          hobby: hobbyInfoCopy
        });
        break;

      default:
        break;
    }
  };

  // Adding new experience (experience,education,skills,hobby) - FillPage - (user can't change experience section)
  handleAddNewExperience = e => {
    let nextIdNumber;
    let informationCopy;
    let newInformation;

    if (e.currentTarget.id === "stepTwo_add_experienceBtn") {
      nextIdNumber = this.state.experience.length;
      informationCopy = this.state.experience;
      newInformation = {
        id: nextIdNumber,
        date: "1900 - 1929",
        company: "Company",
        position: "Boss"
      };

      informationCopy.push(newInformation);

      this.setState({
        experience: informationCopy
      });
    } else if (e.currentTarget.id === "stepThree_add_educationBtn") {
      nextIdNumber = this.state.education.length;
      informationCopy = this.state.education;
      newInformation = {
        id: nextIdNumber,
        date: "",
        school: "",
        way: "",
        title: ""
      };
      informationCopy.push(newInformation);
      this.setState({
        education: informationCopy
      });
    } else if (e.currentTarget.id === "stepFour_add_skillsBtn") {
      nextIdNumber = this.state.skills.length;
      informationCopy = this.state.skills;
      newInformation = {
        id: nextIdNumber,
        skillName: "",
        level: ""
      };
      informationCopy.push(newInformation);
      this.setState({
        skills: informationCopy
      });
    } else if (e.currentTarget.id === "stepFive_add_hobbyBtn") {
      nextIdNumber = this.state.hobby.length;
      informationCopy = this.state.hobby;
      newInformation = {
        id: nextIdNumber,
        hobby: ""
      };
      informationCopy.push(newInformation);
      this.setState({
        hobby: informationCopy
      });
    }
  };

  // Deleting experience (experience, education, skills, hobby) - FillPage
  handleDeleteExperience = (number, e) => {
    let allElements;
    let indexNumber;
    let deletedNumber;
    if (e.currentTarget.className === "stepTwo_deleteBtn") {
      allElements = this.state.experience;
      indexNumber = allElements.findIndex(item => item.id === number);
      deletedNumber = allElements[indexNumber].id;
      allElements.splice(indexNumber, 1);
      allElements.forEach(item => {
        if (item.id > deletedNumber) {
          item.id--;
        }
      });
      this.setState({
        experience: allElements
      });
    } else if (e.currentTarget.className === "stepThree_deleteBtn") {
      allElements = this.state.education;
      indexNumber = allElements.findIndex(item => item.id === number);
      deletedNumber = allElements[indexNumber].id;
      allElements.splice(indexNumber, 1);
      allElements.forEach(item => {
        if (item.id > deletedNumber) {
          item.id--;
        }
      });
      this.setState({
        education: allElements
      });
    } else if (e.currentTarget.className === "stepFour_deleteBtn") {
      allElements = this.state.skills;
      indexNumber = allElements.findIndex(item => item.id === number);
      deletedNumber = allElements[indexNumber].id;
      allElements.splice(indexNumber, 1);
      allElements.forEach(item => {
        if (item.id > deletedNumber) {
          item.id--;
        }
      });
      this.setState({
        skills: allElements
      });
    } else if (e.currentTarget.className === "stepFive_deleteBtn") {
      allElements = this.state.hobby;
      indexNumber = allElements.findIndex(item => item.id === number);
      deletedNumber = allElements[indexNumber].id;
      allElements.splice(indexNumber, 1);
      allElements.forEach(item => {
        if (item.id > deletedNumber) {
          item.id--;
        }
      });
      this.setState({
        skills: allElements
      });
    }
  };

  // Clear user data - FillPage Step6
  handleClearUserDate = () => {
    let leftArrow = document.querySelector(".fillPage_section_leftArrow");
    let message = document.querySelector(".stepSix_clearDateMessage");
    message.style.display = "block";

    let experience = [];
    let education = [];
    let skills = [];
    let hobby = [];

    this.setState({
      experience,
      education,
      skills,
      hobby
    });

    leftArrow.style.visibility = "hidden";

    setTimeout(() => {
      message.style.display = "none";
      setTimeout(() => {
        this.setState({
          stepNumber: 1
        });
        leftArrow.style.visibility = "visible";
      }, 200);
    }, 1200);
  };

  //Change language - Navigation
  handleChangeLanguage = e => {
    if (e.target.value === "Polski") {
      this.setState({
        lang: "Polski"
      });
    } else if (e.target.value === "English") {
      this.setState({
        lang: "English"
      });
    }
  };

  render() {
    return (
      <>
        <Router>
          <nav className="navigation_section">
            <Navigation
              lang={this.state.lang} //info about active language
              changeLanguage={this.handleChangeLanguage} // function change language
            />
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <MainPage
                    lang={this.state.lang} //info about active language
                  />
                  <footer className="footer_section">
                    <Footer lang={this.state.lang} />
                  </footer>
                </>
              )}
            />
            <Route
              exact
              path="/(theme|szablony)"
              render={() => (
                <>
                  <ThemePage
                    onClick={this.handleSelectActiveTemplate} // function select active template - ThemePage
                    template={this.state.activeTemplate} // information about active template - themePage
                    lang={this.state.lang} //info about active language
                  />
                  <footer className="footer_section">
                    <Footer lang={this.state.lang} />
                  </footer>
                </>
              )}
            />
            <Route
              exact
              path="/(fill-your-cv|uzupelnij-cv)"
              render={() => (
                <>
                  <FillPage
                    template={this.state.activeTemplate} // information about active template - themePage
                    stepNumber={this.state.stepNumber} // active number of page - fillPage
                    arrowOnClick={this.handleChangeStepNumber} // function to change page - fillPage
                    informationValue={this.handleSetPersonalData} // funciton saving information into inputs
                    addExperience={this.handleAddNewExperience} // function adding new (experience, education, skills, hobby) - fillPage
                    deleteExperience={this.handleDeleteExperience} // function deleting (experience, education, skills, hobby) - fillPage
                    experience={this.state.experience} // info about user experience - can't be changed
                    education={this.state.education} // info about user education
                    skills={this.state.skills} // info about user skills
                    hobby={this.state.hobby} // info about user hooby
                    clearDate={this.handleClearUserDate} // clear user data function - fillPage step 6
                    lang={this.state.lang} //info about active language
                  />
                  <footer className="footer_section">
                    <Footer lang={this.state.lang} />
                  </footer>
                </>
              )}
            />
            <Route
              exact
              path="/(generate|wygeneruj)"
              render={() => (
                <GeneratePage
                  experience={this.state.experience} // info about user experience - can't be changed
                  education={this.state.education} // info about user education
                  skills={this.state.skills} // info about user skills
                  hobby={this.state.hobby} // info about user hooby
                  activeTemplate={this.state.activeTemplate} // info about active template - string (1-3)
                  lang={this.state.lang} //infor about active language
                />
              )}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
