import React, { Fragment } from "react";
import ImageGrid from "../Components/ImageGrid/ImageGrid";
import MobileHero from "../Components/Hero/MobileHero/MobileHero";
import GalleryHero from "../Assets/Images/GalleryHero.png";
import GalleryMobileHero from "../Assets/Images/GalleryMobileHero.png";
import MobileImageGrid from "../Components/ImageGrid/MobileImageGrid/MobileImageGrid";
import Hero from "../Components/Hero/Hero";

//Gallery component is used to display the Gallery page with the relevant components
const Gallery = () => {
  return (
    <Fragment>
      {/*If user accesses website via Mobile then different content will be displayed that has been optimised for the screen size */}
      <div className="Mobile">
        {/*MobileHero component is used as the page's banner and accepts the text property */}
        <MobileHero image={GalleryMobileHero} text="Gallery" />
        {/*MobileImageGrid is imported to display the images from the Image folder on the Gallery page */}
        <MobileImageGrid />
      </div>
      {/*If user accesses website via Desktop then different content will be displayed that has been optimised for the screen size */}
      <div className="Desktop">
        {/*Hero component is used as the page's banner and accepts the text property */}
        <Hero image={GalleryHero} />
        {/*ImageGrid is imported to display the images from the Image folder on the Gallery page */}
        <ImageGrid />
      </div>
    </Fragment>
  );
};
export default Gallery;
