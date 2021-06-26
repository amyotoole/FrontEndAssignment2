import React from "react";
import Card from "@material-ui/core/Card";
import { StyledEngineProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./BehindCard.css";

//Using the Card API from Material UI, the Card component is imported to be used behind the Character Card used on the Home page
const BehindCard = ({ children, heading }) => (
  //BehindCard accepts the heading property
  <StyledEngineProvider injectFirst>
    <Card className="BehindCard">
      {children}
      <Typography className="BehindCard-Text">{heading}</Typography>
    </Card>
  </StyledEngineProvider>
);

export default BehindCard;
