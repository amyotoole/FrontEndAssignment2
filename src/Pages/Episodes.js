import React, { Fragment } from "react";
import EpisodesHero from "../Assets/Images/EpisodesHero.png";
import Hero from "../Components/Hero/Hero";
import EpisodeDesc from "../Components/EpisodeDescriptions/EpisodeDesc";
import MobileEpisodeHero from "../Assets/Images/MobileEpisodeHero.png";
import MobileHero from "../Components/Hero/MobileHero/MobileHero";
import MobileEpisodeCards from "../Components/Cards/PictureCards/MobileEpisodeCards/MobileEpisodeCards";

const Episodes = () => {
  return (
    <Fragment>
      {/*If user accesses website via Mobile then different content will be displayed that has been optimised for the screen size */}
      <div className="Mobile">
        {/*MobileHero component is used as the page's banner and accepts the text property */}
        <MobileHero image={MobileEpisodeHero} text="Episodes" />
        {/*MobileEpisodeCards is imported to display the Episode Descriptions on the Episodes page */}
        <MobileEpisodeCards />
      </div>
      {/*If user accesses website via Desktop then different content will be displayed that has been optimised for the screen size */}
      <div className="Desktop">
        {/*Hero component is passed the CharacterHro image and used as the page's banner */}
        <Hero image={EpisodesHero} />
        {/*EpisodeDesc is imported to display the Episode Descriptions on the Episodes page */}
        <EpisodeDesc />
      </div>
    </Fragment>
  );
};
export default Episodes;
