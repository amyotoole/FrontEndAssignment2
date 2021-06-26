import React from "react";
import CharacterCard from "./CharacterCard";
import Shield from "../../../Assets/Images/Shield.png";
import BuckyLogo from "../../../Assets/Images/BuckyLogo.png";
import FlagSmasherLogo from "../../../Assets/Images/FlagSmasherLogo.png";
import USAgentLogo from "../../../Assets/Images/USAgentLogo.png";
import Grid from "@material-ui/core/Grid";
import BehindCard from "../BehindCard/BehindCard";

const CharacterCards = () => (
  //Using the Grid API, the Grid component is imported from Material UI
  //The Grid component is a container for the CharacterCards to ensure they are displayed in a row & is responsive to the screen size
  <div className="MaxWidth">
    <Grid container direction="row" justify="space-around" alignItems="center">
      {/*BehindCard is imported and passed the name of the Character to be displayed */}
      <BehindCard heading="Sam Wilson">
        {/*CharacterCard is imported and passed the Card className, the image className, and the image required 
      Each Card displays each character's Name and Logo*/}
        <CharacterCard imageClassName="Card-image" image={Shield} />
      </BehindCard>
      <BehindCard heading="James Barnes">
        <CharacterCard imageClassName="Card-image" image={BuckyLogo} />
      </BehindCard>
      <BehindCard heading="Flag Smasher">
        <CharacterCard imageClassName="Card-image" image={FlagSmasherLogo} />
      </BehindCard>
      <BehindCard heading="John Walker">
        <CharacterCard imageClassName="Card-image" image={USAgentLogo} />
      </BehindCard>
    </Grid>
  </div>
);

export default CharacterCards;
