import React from "react";
import WorthList from "./WorthList";
import WorthBorderBottom from "./WorthBorderBottom";
import "../../style/WorthSection/Worth.scss";
import analitic from "../../image/analitic.jpg";

const Worth = props => {
  return (
    <>
      <h2>
        {props.lang === "Polski" ? "Dlaczego warto?" : "Why it is worth it?"}
      </h2>
      <WorthList lang={props.lang} />
      <img src={analitic} alt="Woman checking statistic" />
      <WorthBorderBottom />
    </>
  );
};

export default Worth;
