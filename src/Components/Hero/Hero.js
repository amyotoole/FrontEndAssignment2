import React from "react";
import "./Hero.css";

/* Hero Component used for the page Banner, CharacterDesc, and EpisodeDesc
Destructed props to avoid repeating `props.
Hero accepts an image and can have text overlaid on the image provided. 
*/
const Hero = ({
  className,
  heading,
  subHeading,
  heroText,
  image,
  textClassName,
  children,
}) => (
  <div>
    {/*Hero accepts an image with custom styling */}
    <img className={`Hero ${className}`} src={image} alt="Hero" />
    {/*Hero accepts Title, SubTitle, and Text */}
    <p className={textClassName}>
      <h1>{heading}</h1>
      <h2>{subHeading}</h2>
      {heroText}
    </p>
    {children}
  </div>
);

export default Hero;
