import React from "react";
import Baner from "../components//Baner/Baner";
import UnderBaner from "../components/UnderBaner/UnderBaner";
import Steps from "../components/StepsSection/Steps";
import ThemeSection from "../components/ThemeSection/ThemeSection";
import Worth from "../components/WorhSection/Worth";
import FillCv from "../components/FillCvSection/FillCv";

class MainPage extends React.Component {
  state = {};

  render() {
    return (
      <>
        <section className="baner_section">
          <Baner lang={this.props.lang} />
        </section>

        <section className="underBaner_section">
          <UnderBaner lang={this.props.lang} />
        </section>

        <section className="steps_section">
          <Steps lang={this.props.lang} />
        </section>

        <section className="themeSection_section">
          <ThemeSection lang={this.props.lang} />
        </section>

        <section className="worth_section">
          <Worth lang={this.props.lang} />
        </section>

        <section className="fillCV_section">
          <div className="fillCV_section_container">
            <FillCv lang={this.props.lang} />
          </div>
        </section>
      </>
    );
  }
}

export default MainPage;
