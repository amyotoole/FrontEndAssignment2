import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { StyledEngineProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import "./Card.css";

/*Using the Card API from Material UI, the Card component is imported to be used as the Character Card used on the Home page
Character card displays the Character's logo.
Destructed props to avoid repeating `props.`
*/
const CharacterCard = ({ imageClassName, image }) => (
  //StyledEngineProvider is used to override the styles set by Material UI and allow custom styling
  <StyledEngineProvider injectFirst>
    <Card className="Card">
      <CardContent className="ContentClassName">
        {/*Card accepts a className property for the content used*/}
        <CardMedia
          //Card accepts a className property for the image passed
          className={imageClassName}
          //Card accepts an image property
          image={image}
        />
      </CardContent>
    </Card>
  </StyledEngineProvider>
);

export default CharacterCard;
