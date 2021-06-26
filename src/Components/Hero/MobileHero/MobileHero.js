import React, { Fragment } from "react";
import "./MobileHero.css";

const MobileHero = ({ image, text }) => (
  <Fragment>
    <img className="MobileHero" src={image} alt="Hero"></img>
    <div className="Rectangle">
      <h1 className="MobileHeroText">{text}</h1>
    </div>
  </Fragment>
);
export default MobileHero;
