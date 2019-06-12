import React from "react";
import "../style/ThemePage/ThemePage.scss";
import Template from "../components/ThemePage/Template";
import { Link } from "react-router-dom";

import template1 from "../image/template1.png";
import template2 from "../image/template2.png";
import template3 from "../image/template3.png";

class ThemePage extends React.Component {
  state = {
    template: this.props.template
  };

  render() {
    return (
      <section className="themePage_section">
        <h2 className="themePage_section_mainHeader">
          {this.props.lang === "Polski"
            ? "Kliknij i wybierz swój szablon"
            : "Click and select your CV template"}
        </h2>
        <Template
          img={template1}
          onClick={this.props.onClick} // set active template
          number={1} // template number
          template={this.state.template} // number of active template
        />
        <Template
          img={template2}
          onClick={this.props.onClick} // set active template
          number={2} // template number
          template={this.state.template} // number of active template
        />
        <Template
          img={template3}
          onClick={this.props.onClick} // set active template
          number={3} // template number
          template={this.state.template} // number of active template
        />

        <div className="buttons_section">
          <div className="button">
            <Link
              to={
                this.props.lang === "Polski" ? "uzupelnij-cv" : "fill-your-cv"
              }
              className="orange"
              onClick={() => {
                document.documentElement.scrollTop = 0;
              }}
            >
              {this.props.lang === "Polski" ? "Wypełnij CV" : "Fill your CV"}
            </Link>
          </div>

          <div className="button">
            <Link
              to={this.props.lang === "Polski" ? "wygeneruj" : "generate"}
              className="blue"
              onClick={() => {
                document.documentElement.scrollTop = 0;
              }}
            >
              {this.props.lang === "Polski" ? "Wygeneruj CV" : "Generate CV"}
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ThemePage;
