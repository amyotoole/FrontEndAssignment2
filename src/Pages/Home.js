import React, { Fragment } from "react";
import CharacterCards from "../Components/Cards/CharacterCards/CharacterCards";
import HomeHero from "../Assets/Images/HomeHero.png";
import Hero from "../Components/Hero/Hero";
import EpisodeCards from "../Components/Cards/EpisodeCards/EpisodeCards";

const Home = () => (
  <Fragment>
    {/*Hero component is used as the page's banner and accepts the text property */}
    <Hero image={HomeHero} />
    {/*CharacterCards is imported to display the Characters on the Home page */}
    <CharacterCards />
    {/*EpisodeCards is imported to display the Episodes on the Home page */}
    <EpisodeCards />
  </Fragment>
);

export default Home;
