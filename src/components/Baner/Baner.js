import React from "react";
import "../../style//Baner/Baner.scss";
import BanerImages from "./BanerImages";
import BanerArrows from "./BanerArrows";

class Baner extends React.Component {
  state = {
    activeSlide: 0
  };
  handleChangeSlide = e => {
    //first Slide
    let firstSlide = document.querySelector(
      ".baner_section_image:nth-child(1)"
    );
    //second Slide
    let secondSlide = document.querySelector(
      ".baner_section_image:nth-child(2)"
    );
    // third slide
    let thirdSlide = document.querySelector(
      ".baner_section_image:nth-child(3)"
    );

    // if user click right arrow
    if (e.currentTarget.className === "baner_section_arrowRight") {
      this.setState(prevState => ({
        activeSlide: prevState.activeSlide + 1
      }));

      // when slide number 0 was active
      if (this.state.activeSlide === 0) {
        firstSlide.style.opacity = 0;
        secondSlide.style.display = "block";
        secondSlide.style.opacity = 1;
        thirdSlide.style.display = "block";
      }
      // when slide number 1 was active
      else if (this.state.activeSlide === 1) {
        secondSlide.style.opacity = 0;
        thirdSlide.style.opacity = 1;
      }
      // when slide number 2 was active
      else if (this.state.activeSlide === 2) {
        thirdSlide.style.opacity = 0;
        firstSlide.style.opacity = 1;

        this.setState({
          activeSlide: 0
        });
      }
    }
    // if user click left arrow
    else {
      this.setState(prevState => ({
        activeSlide: prevState.activeSlide - 1
      }));

      //when slide number 0 was active
      if (this.state.activeSlide === 0) {
        firstSlide.style.opacity = 0;
        thirdSlide.style.display = "block";
        thirdSlide.style.opacity = 1;
        secondSlide.style.display = "block";
        secondSlide.style.opacity = 0;
        this.setState({
          activeSlide: 2
        });
      }
      //when slide number 1 was active
      else if (this.state.activeSlide === 1) {
        firstSlide.style.opacity = 1;
        secondSlide.style.opacity = 0;
      }
      //when slide number 2 was active
      else if (this.state.activeSlide === 2) {
        thirdSlide.style.opacity = 0;
        secondSlide.style.opacity = 1;
      }
    }
  };

  render() {
    return ( <
      >
      <
      BanerImages lang = {
        this.props.lang
      }
      /> <
      BanerArrows onClick = {
        this.handleChangeSlide
      }
      /> <
      />
    );
  }
}

export default Baner;