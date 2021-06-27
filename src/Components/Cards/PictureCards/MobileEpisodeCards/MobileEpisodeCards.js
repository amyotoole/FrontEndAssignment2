import React, { Fragment } from "react";
import PictureCard from "../PictureCards";
import Episode1 from "../../../../Assets/Images/Episode1.png";
import Episode2 from "../../../../Assets/Images/Episode2.png";
import Episode3 from "../../../../Assets/Images/Episode3.png";
import Episode4 from "../../../../Assets/Images/Episode4.png";
import Episode5 from "../../../../Assets/Images/Episode5.png";
import Episode6 from "../../../../Assets/Images/Episode6.png";
import "./MobileEpisodeCards.css";
import VideoPlayer from "../../../VideoPlayer/VideoPlayer";

const MobileEpisodeCards = () => (
  <Fragment>
    {/*PictureCard is imported to be used as the MobileCharacterCard. 
    MobileCharacterCard displays the Episode's image, name, and a brief episode synopsis
    The component accepts custom image styling, an image, the heading with styling and an episode synopsis with styling. */}
    <PictureCard
      imageClassName="EpisodeImage"
      image={Episode1}
      alt="Episode 1"
      headingClassName="EpisodeCardRect"
      heading="Episode 1"
      descriptionClassName="EpisodeDescriptionCard"
      description="Six months after half of all life returned from the Blip, Sam Wilson, who was given the mantle of Captain America by Steve Rogers, struggles with this idea and decides to give Rogers' shield to the U.S. government for a museum display. Bucky Barnes, who was recently pardoned, attends government-mandated therapy, where he discusses his attempts to make amends for his time as a brainwashed assassin, the Winter Soldier. Torres investigates another terrorist group, the Flag Smashers, who believe life was better during the Blip. Torres is injured by a member of the group with superhuman strength when he witnesses them rob a bank in Switzerland. The government soon announces a new Captain America, John Walker."
    >
      {/*VideoPlayer is imported to provide the user with a clickable component which redirects to the relevant disney+ link. */}
      <VideoPlayer
        className="VideoPlayerTop"
        //url to Episode 1 on disney+
        url="https://www.disneyplus.com/en-gb/video/1c5d063a-52a4-4942-ac08-67f0ea13e27b"
      />
    </PictureCard>
    <PictureCard
      imageClassName="EpisodeImage"
      image={Episode2}
      alt="Episode 2"
      headingClassName="EpisodeCardRect-Alt"
      heading="Episode 2"
      descriptionClassName="EpisodeDescriptionCard-Alt"
      description="Walker appears on Good Morning America and reveals his desire to live up to Rogers' mantle. Barnes tells Wilson that he should have kept the shield before accompanying him to Munich, where the Flag Smashers are stealing a shipment of medicine. Wilson and Barnes attack the group, but the terrorists are all super soldiers and overpower the pair. Traveling to Baltimore, Barnes introduces Wilson to Isaiah Bradley, a veteran super soldier who fought the Winter Soldier in the Korean War. Bradley refuses to help them uncover information about additional super soldiers due to being imprisoned and experimented on by the U.S. government and Hydra for 30 years. Barnes is arrested for missing a therapy appointment, but Walker has him released. Barnes and Wilson refuse to work with Walker, and Barnes suggests to Wilson that they visit the imprisoned Zemo."
    >
      <VideoPlayer
        //url to Episode 2 on disney+

        url="https://www.disneyplus.com/en-gb/video/1c5d063a-52a4-4942-ac08-67f0ea13e27b"
      />
    </PictureCard>
    <PictureCard
      imageClassName="EpisodeImage"
      image={Episode3}
      alt="Episode 3"
      headingClassName="EpisodeCardRect"
      heading="Episode 3"
      descriptionClassName="EpisodeDescriptionCard"
      description="Zemo offers to help stop the Flag Smashers, so Barnes orchestrates a prison riot to help him escape prison. They travel to Madripoor, a criminal sanctuary city-island run by the mysterious Power Broker. High-ranking criminal Selby reveals that the Power Broker hired former Hydra scientist Dr. Wilfred Nagel to recreate the Super Soldier Serum. Selby is killed when Wilson's identity is exposed, and every bounty hunter in Madripoor targets Wilson, Barnes, and Zemo. Sharon Carter, who has been living as a fugitive on the island, saves the trio and directs them to Nagel's lab. They learn that he created twenty doses of the serum, which Morgenthau stole. The Flag Smashers raid and bomb a Global Repatriation Council (GRC) storage facility in Lithuania while Zemo, Barnes, and Wilson search for them in Latvia. Barnes is confronted by Ayo, a member of Wakanda's Dora Milaje."
    >
      <VideoPlayer
        //url to Episode 3 on disney+
        url="https://www.disneyplus.com/en-gb/video/1c5d063a-52a4-4942-ac08-67f0ea13e27b"
      />
    </PictureCard>
    <PictureCard
      imageClassName="EpisodeImage"
      image={Episode4}
      alt="Episode 4"
      headingClassName="EpisodeCardRect-Alt"
      heading="Episode 4"
      descriptionClassName="EpisodeDescriptionCard-Alt"
      description="Zemo helps find Morgenthau at a funeral for her adoptive mother, where Walker and Hoskins intercept them. Wilson speaks with Morgenthau alone and attempts to persuade her to end the violence, but an impatient Walker intervenes. Zemo destroys most of the serum before he is apprehended by Walker, who secretly takes the last vial. Ayo and the Dora Milaje come for Zemo, but Walker refuses to hand him over. In the ensuing fight, the Dora Milaje humiliate Walker while Zemo escapes. Walker and Hoskins engage other members of the Flag Smashers, leading to another fight in which Morgenthau accidentally kills Hoskins. Enraged by his friend's death and having taken the serum, Walker uses the shield to kill one of the Flag Smashers in front of horrified bystanders, who film his actions."
    >
      <VideoPlayer
        //url to Episode 4 on disney+
        url="https://www.disneyplus.com/en-gb/video/1c5d063a-52a4-4942-ac08-67f0ea13e27b"
      />
    </PictureCard>
    <PictureCard
      imageClassName="EpisodeImage"
      image={Episode5}
      alt="Episode 5"
      headingClassName="EpisodeCardRect"
      heading="Episode 5"
      descriptionClassName="EpisodeDescriptionCard"
      description="Wilson and Barnes demand the shield from Walker, leading to a fight in which Walker destroys Wilson's wingsuit. Wilson and Barnes take the shield, breaking Walker's arm. Barnes finds Zemo in Sokovia and hands him over to the Dora Milaje, while Walker receives an other than honorable discharge and is stripped of his title as Captain America. Afterward, Walker is approached by Contessa Valentina Allegra de Fontaine. Wilson leaves the damaged wingsuit with Torres and visits Bradley, who states his belief that a Black man cannot, and should not, be Captain America. Barnes and Wilson train with the shield and agree to move on from their pasts and work together. The Flag Smashers plan an attack on a GRC conference in New York City and are joined by Batroc, who Carter has secretly hired."
    >
      <VideoPlayer
        //url to Episode 5 on disney+

        url="https://www.disneyplus.com/en-gb/video/1c5d063a-52a4-4942-ac08-67f0ea13e27b"
      />
    </PictureCard>
    <PictureCard
      imageClassName="EpisodeImage"
      image={Episode6}
      alt="Episode 6"
      headingClassName="EpisodeCardRect-Alt"
      heading="Episode 6"
      descriptionClassName="EpisodeDescriptionCard-Alt"
      description="Wearing a new Captain America uniform and flight suit, Wilson flies to New York to stop the Flag Smashers' attack with the help of Barnes, Carter, and Walker. Carter accidentally reveals that she is the Power Broker to Batroc and kills him while Wilson attempts to reason with Morgenthau. Wilson convinces the GRC to postpone the forced relocation of displaced people that Morgenthau died fighting for and instead make efforts to help them. The remaining serum-enhanced Flag Smashers are caught by Barnes and Walker and sent to the Raft, but they are killed by Zemo's butler, Oeznik, en route. De Fontaine gives Walker a new uniform and codename: U.S. Agent. Barnes makes amends with everyone he hurt or enabled as the Winter Soldier while Wilson has a memorial dedicated to Bradley added to the Captain America museum exhibit."
    >
      <VideoPlayer
        //url to Episode 6 on disney+
        url="https://www.disneyplus.com/en-gb/video/1c5d063a-52a4-4942-ac08-67f0ea13e27b"
      />
    </PictureCard>
  </Fragment>
);

export default MobileEpisodeCards;
