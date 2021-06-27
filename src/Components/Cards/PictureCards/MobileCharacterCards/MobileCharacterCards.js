import React, { Fragment } from "react";
import PictureCard from "../PictureCards";
import "./MobileCharacterCards.css";
import Bucky from "../../../../Assets/Images/Bucky.png";
import Sam from "../../../../Assets/Images/Sam.png";
import JohnWalker from "../../../../Assets/Images/JohnWalker.png";
import Zemo from "../../../../Assets/Images/Zemo.png";
import Sharon from "../../../../Assets/Images/Sharon.png";
import FlagSmasher from "../../../../Assets/Images/FlagSmasher.png";

const MobileCharacterCards = () => (
  <Fragment>
    {/*PictureCard is imported to be used as the MobileCharacterCards. 
    MobileCharacterCards displays the Character's image, name, and a brief character description
    The component accepts custom image styling, an image, the heading with styling and an character description with styling. */}
    <PictureCard
      imageClassName="CharacterImage"
      image={Sam}
      alt="Sam"
      headingClassName="CharacterCardRect"
      heading="Sam Wilson"
      descriptionClassName="CharacterDescriptionCard"
      description="When Steve Rogers asked Air Force Veteran Sam Wilson for help, Wilson immediately agreed. He donned the flight suit he’d used in combat to become the Falcon, setting him on a path towards becoming an Avenger and eventually Captain America."
    />
    <PictureCard
      imageClassName="CharacterImage"
      image={Bucky}
      alt="Bucky"
      headingClassName="CharacterCardRect-Alt"
      heading="James Barnes"
      descriptionClassName="CharacterDescriptionCard-Alt"
      description="James Buchanan “Bucky” Barnes enlists to fight in World War II, but eventually literally falls in battle. Unfortunately, the evil Arnim Zola recovers him and erases his memory, turning him into a highly-trained assassin called the Winter Soldier."
    />
    <PictureCard
      imageClassName="CharacterImage"
      image={JohnWalker}
      alt="John Walker"
      headingClassName="CharacterCardRect"
      heading="John Walker"
      descriptionClassName="CharacterDescriptionCard"
      description="Inspired by his military family members, John F. Walker becomes a proud patriot who wants nothing more than to be a hero. When Power Broker offers him enhanced strength, he takes it and becomes the heroic, albeit smug, U.S.Agent!"
    />
    <PictureCard
      imageClassName="CharacterImage"
      image={Zemo}
      alt="Zemo"
      headingClassName="CharacterCardRect-Alt"
      heading="Baron Helmut Zemo"
      descriptionClassName="CharacterDescriptionCard-Alt"
      description="After losing his family in the Battle of Sokovia, Zemo becomes obsessed with wiping out those responsible—the Avengers. Through cunning and manipulation, he masterminds events to divide the team, making them destroy themselves."
    />
    <PictureCard
      imageClassName="CharacterImage"
      image={Sharon}
      alt="Sharon"
      headingClassName="CharacterCardRect"
      heading="Sharon Carter"
      descriptionClassName="CharacterDescriptionCard"
      description="Aspiring to be like her great-aunt Peggy, Sharon Carter becomes a covert operative and agent of S.H.I.E.L.D. With a strong moral compass, she listens to her instincts even if it means betraying the very organization she works for."
    />
    <PictureCard
      imageClassName="CharacterImage"
      image={FlagSmasher}
      alt="Flag Smasher"
      headingClassName="CharacterCardRect-Alt"
      heading="Karli Morgenthau"
      descriptionClassName="CharacterDescriptionCard-Alt"
      description="Karli is the leader of the Flag Smashers, a group who seeks to restore the world to a time when people were unified to help each other. Karli and other members of her group take the super soldier serum, which grants her enhanced abilities."
    />
  </Fragment>
);

export default MobileCharacterCards;
