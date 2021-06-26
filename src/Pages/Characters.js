import React, { Fragment } from "react";
import MobileHero from "../Components/Hero/MobileHero/MobileHero";
import CharactersHero from "../Assets/Images/CharactersHero.png";
import CharactersMobileHero from "../Assets/Images/CharactersMobileHero.png";
import MobileCharacterCards from "../Components/Cards/PictureCards/MobileCharacterCards/MobileCharacterCards";
import Hero from "../Components/Hero/Hero";
import CharacterDescs from "../Components/CharacterDesc/CharacterDesc";

const Characters = () => {
  return (
    <Fragment>
      {/*If user accesses website via Mobile then different content will be displayed that has been optimised for the screen size */}
      <div className="Mobile">
        {/*MobileHero component is used as the page's banner and accepts the text property */}
        <MobileHero image={CharactersMobileHero} text="Characters" />
        {/*MobileCharacterCards is imported to display the Character Descriptions on the Characters page */}
        <MobileCharacterCards />
      </div>
      {/*If user accesses website via Desktop then different content will be displayed that has been optimised for the screen size */}
      <div className="Desktop">
        {/*Hero component is passed the CharacterHro image and used as the page's banner */}
        <Hero image={CharactersHero} />
        {/*CharacterDescs is imported to display the Character Descriptions on the Characters page */}
        <CharacterDescs />
      </div>
    </Fragment>
  );
};
export default Characters;
