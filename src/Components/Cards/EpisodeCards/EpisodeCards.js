import React, { Fragment } from "react";
import EpisodeCard from "./EpisodeCard";
import Episode1 from "../../../Assets/Images/Episode1.png";
import Episode2 from "../../../Assets/Images/Episode2.png";
import Episode3 from "../../../Assets/Images/Episode3.png";
import Episode4 from "../../../Assets/Images/Episode4.png";
import Episode5 from "../../../Assets/Images/Episode5.png";
import Episode6 from "../../../Assets/Images/Episode6.png";
import "./EpisodeCards.css";
import Grid from "@material-ui/core/Grid";
import HorizontalScroller from "react-horizontal-scroll-container";

const EpisodeEpisodeCards = () => {
  return (
    <Fragment>
      {/*When viewed on a Mobile device the EpisodeCard will display differently to be optimised for the screen size */}
      <div className="Mobile">
        {/*HorizontalScroller component is imported to allow user to horizontally scroll through the EpisodeCards when viewed on a Mobile */}
        <HorizontalScroller>
          <div>
            {/*EpisodeCard is passed the custom styles, the episode heading, and the episode image */}
            <EpisodeCard
              className="EpisodeCard"
              imageClassName="EpisodeCard-image"
              heading="Episode 1"
              image={Episode1}
            />
          </div>
          <div>
            <EpisodeCard
              className="EpisodeCard-Alt"
              imageClassName="EpisodeCard-image"
              heading="Episode 2"
              image={Episode2}
            />
          </div>
          <div>
            <EpisodeCard
              className="EpisodeCard"
              imageClassName="EpisodeCard-image"
              heading="Episode 3"
              image={Episode3}
            />
          </div>
          <div>
            <EpisodeCard
              className="EpisodeCard-Alt"
              imageClassName="EpisodeCard-image"
              heading="Episode 4"
              image={Episode4}
            />
          </div>
          <div>
            <EpisodeCard
              className="EpisodeCard"
              imageClassName="EpisodeCard-image"
              heading="Episode 5"
              image={Episode5}
            />
          </div>
          <div>
            <EpisodeCard
              className="EpisodeCard-Alt"
              imageClassName="EpisodeCard-image"
              heading="Episode 6"
              image={Episode6}
            />
          </div>
        </HorizontalScroller>
      </div>
      {/*Desktop view of the EpisodeCards */}
      <div className="Desktop MaxWidth">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6} lg={4}>
            <EpisodeCard
              className="EpisodeCard"
              imageClassName="EpisodeCard-image"
              heading="Episode 1"
              image={Episode1}
            />
          </Grid>

          <Grid item xs={6} lg={4}>
            <EpisodeCard
              className="EpisodeCard-Alt"
              imageClassName="EpisodeCard-image"
              heading="Episode 2"
              image={Episode2}
            />
          </Grid>

          <Grid item xs={6} lg={4}>
            <EpisodeCard
              className="EpisodeCard"
              imageClassName="EpisodeCard-image"
              heading="Episode 3"
              image={Episode3}
            />
          </Grid>

          <Grid item xs={6} lg={4}>
            <EpisodeCard
              className="EpisodeCard-Alt"
              imageClassName="EpisodeCard-image"
              heading="Episode 4"
              image={Episode4}
            />
          </Grid>

          <Grid item xs={6} lg={4}>
            <EpisodeCard
              className="EpisodeCard"
              imageClassName="EpisodeCard-image"
              heading="Episode 5"
              image={Episode5}
            />
          </Grid>

          <Grid item xs={6} lg={4}>
            <EpisodeCard
              className="EpisodeCard-Alt"
              imageClassName="EpisodeCard-image"
              heading="Episode 6"
              image={Episode6}
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};
export default EpisodeEpisodeCards;
