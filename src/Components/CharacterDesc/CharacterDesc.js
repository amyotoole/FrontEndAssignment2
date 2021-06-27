import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import Sam_Desc from "../../Assets/Images/Sam_Desc.png";
import Bucky_Desc from "../../Assets/Images/Bucky_Desc.png";
import John_Desc from "../../Assets/Images/John_Desc.png";
import Zemo_Desc from "../../Assets/Images/Zemo_Desc.png";
import Sharon_Desc from "../../Assets/Images/Sharon_Desc.png";
import FlagSmasher_Desc from "../../Assets/Images/FlagSmasher_Desc.png";
import "./CharacterDesc.css";

/*
CharacterDecs component displays the character's name, image and a brief description of the character.
Here the properties are passed to the Hero component.
*/
const CharacterDescs = () => (
  <Fragment>
    {/*Hero component is imported to display the background image which the text is displayed over. */}
    <Hero
      className="CharacterDesc"
      image={Sam_Desc}
      textClassName="CharacterDescText-Right"
      heading="Sam Wilson"
      subHeading="Captain America"
      heroText="When Steve Rogers asked Air Force Veteran Sam Wilson for help, Wilson immediately agreed. He donned the flight suit he’d used in combat to become the Falcon, setting him on a path towards becoming an Avenger and eventually Captain America."
    />
    <Hero
      className="CharacterDesc"
      image={Bucky_Desc}
      textClassName="CharacterDescText"
      heading="James Barnes"
      subHeading="The Winter Soldier"
      heroText="James Buchanan “Bucky” Barnes enlists to fight in World War II, but eventually literally falls in battle. Unfortunately, the evil Arnim Zola recovers him and erases his memory, turning him into a highly-trained assassin called the Winter Soldier."
    />
    <Hero
      className="CharacterDesc"
      image={John_Desc}
      textClassName="CharacterDescText-Right"
      heading="John Walker"
      subHeading="US Agent"
      heroText="Inspired by his military family members, John F. Walker becomes a proud patriot who wants nothing more than to be a hero. When Power Broker offers him enhanced strength, he takes it and becomes the heroic, albeit smug, U.S.Agent!"
    />
    <Hero
      className="CharacterDesc"
      image={Zemo_Desc}
      textClassName="CharacterDescText"
      heading="Baron Helmut Zemo"
      subHeading="Zemo"
      heroText="After losing his family in the Battle of Sokovia, Zemo becomes obsessed with wiping out those responsible—the Avengers. Through cunning and manipulation, he masterminds events to divide the team, making them destroy themselves."
    />
    <Hero
      className="CharacterDesc"
      image={Sharon_Desc}
      textClassName="CharacterDescText-Right"
      heading="Sharon Carter"
      subHeading="Power Broker"
      heroText="Aspiring to be like her great-aunt Peggy, Sharon Carter becomes a covert operative and agent of S.H.I.E.L.D. With a strong moral compass, she listens to her instincts even if it means betraying the very organization she works for."
    />
    <Hero
      className="CharacterDesc"
      image={FlagSmasher_Desc}
      textClassName="CharacterDescText"
      heading="Karli Morgenthau"
      subHeading="One World One People"
      heroText="Karli is the leader of the Flag Smashers, a group who seeks to restore the world to a time when people were unified to help each other. Karli and other members of her group take the super soldier serum, which grants her enhanced abilities."
    />
  </Fragment>
);

export default CharacterDescs;
