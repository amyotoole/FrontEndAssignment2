import React from "react";

const PictureCard = ({
  imageClassName,
  image,
  alt,
  url,
  heading,
  description,
  headingClassName,
  descriptionClassName,
}) => (
  <div>
    <img
      className={imageClassName}
      src={image}
      alt={alt}
      onClick={() => {
        window.location.href = url;
      }}
    />
    <h1 className={headingClassName}>{heading}</h1>
    <p className={descriptionClassName}>{description}</p>
  </div>
);

export default PictureCard;
