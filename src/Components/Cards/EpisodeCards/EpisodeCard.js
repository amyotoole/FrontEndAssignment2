import React from "react";
import Card from "@material-ui/core/Card";
import { NavLink } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import { StyledEngineProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./EpisodeCards.css";

const EpisodeCard = ({ className, imageClassName, image, heading }) => (
  //StyledEngineProvider is used to override the styles set by Material UI and allow custom styling
  <StyledEngineProvider injectFirst>
    {/*Using the Card API from Material UI, the Card component is imported to be used as the Episode Card used on the Home page */}
    {/*Card is passed className property*/}
    <Card className={className}>
      {/*When clicked the EpisodeCard will redirect to the Episodes page */}
      <NavLink to="/episodes" className="EpisodeCard-Link">
        <CardContent className="EpisodeCard-Content">
          {/*Media passed to EpisodeCard accepts a className property to custom style the card, ImageClassName property, and an image */}
          <CardMedia className={(className, imageClassName)} image={image} />
          {/*Horizontal Line used to divide the episode image from the heading */}
          <hr className="HLine" />
          {/*Typography component is used to control the heading property*/}
          <Typography className="EpisodeCard-Text">{heading}</Typography>
        </CardContent>
      </NavLink>
    </Card>
  </StyledEngineProvider>
);

export default EpisodeCard;
