import React from "react";

/*PictureCard component is used with the mobile view to display a component with an image, heading with a rectangle background and a block of text overlaid on a background.
It accepts an image with custom styling, heading with custom styling, a description with custom styling and children. 
Destructed props to avoid repeating `props.`
*/
const PictureCard = ({
  imageClassName,
  image,
  alt,
  heading,
  description,
  headingClassName,
  descriptionClassName,
  children,
}) => (
  <div>
    <img className={imageClassName} src={image} alt={alt} />
    <h1 className={headingClassName}>{heading}</h1>
    <p className={descriptionClassName}>{description}</p>
    {children}
  </div>
);

export default PictureCard;
