import * as React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import "../ImageGrid.css";
import Episode1 from "../../../Assets/Images/Episode1.png";
import Episode2 from "../../../Assets/Images/Episode2.png";
import Episode3 from "../../../Assets/Images/Episode3.png";
import Episode4 from "../../../Assets/Images/Episode4.png";
import Episode5 from "../../../Assets/Images/Episode5.png";
import Episode6 from "../../../Assets/Images/Episode6.png";
import Bucky from "../../../Assets/Images/Bucky.png";
import JohnWalker from "../../../Assets/Images/JohnWalker.png";
import CA from "../../../Assets/Images/CA.png";
import Sam from "../../../Assets/Images/Sam.png";
import FlagSmasher from "../../../Assets/Images/FlagSmasher.png";
import Sharon from "../../../Assets/Images/Sharon.png";
import Zemo from "../../../Assets/Images/Zemo.png";
import Poster1 from "../../../Assets/Images/Poster1.png";
import Poster2 from "../../../Assets/Images/Poster2.png";

/*ImageList and Image Item are imported from Material UI to display the image gallery within an organised grid.
Mobile variant of the ImageGrid is used as the row height and number of columns are different to the Desktop view.
*/

//Allows for varied container sizes and ratios to allow images to span multiple rows/columns
const srcset = (image, size, rows = 1, cols = 1) => `${image}?w=${
  size * cols
}&h=${size * rows}&fit=crop&auto=format 1x,
${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;

//Array table to host the required images and defines the number of rows/columns the image should span over
const itemData = [
  {
    img: Episode1,
    title: "Episode1",
    author: "author",
    rows: 1,
    cols: 2,
  },
  {
    img: Episode3,
    title: "Episode3",
    author: "author",
    rows: 1,
    cols: 2,
  },
  {
    img: CA,
    title: "CA",
    author: "author",
    rows: 2,
    cols: 2,
  },
  {
    img: Sam,
    title: "Sam",
    author: "author",
    rows: 2,
    cols: 2,
  },
  {
    img: Episode4,
    title: "Episode4",
    author: "author",
    rows: 1,
    cols: 2,
  },
  {
    img: Episode5,
    title: "Episode5",
    author: "author",
    rows: 1,
    cols: 2,
  },
  {
    img: Episode6,
    title: "Episode6",
    author: "author",
    rows: 1,
    cols: 2,
  },
  {
    img: JohnWalker,
    title: "JohnWalker",
    author: "author",
    rows: 1,
    cols: 1,
  },
  {
    img: Bucky,
    title: "Bucky",
    author: "author",
    rows: 1,
    cols: 1,
  },
  {
    img: Zemo,
    title: "Zemo",
    author: "author",
    rows: 1,
    cols: 1,
  },
  {
    img: Poster1,
    title: "Poster1",
    author: "author",
    rows: 1,
    cols: 1,
  },
  {
    img: Poster2,
    title: "Poster2",
    author: "author",
    rows: 2,
    cols: 2,
  },

  {
    img: Sharon,
    title: "Sharon",
    author: "author",
    rows: 1,
    cols: 1,
  },
  {
    img: FlagSmasher,
    title: "FlagSmasher",
    author: "author",
    rows: 1,
    cols: 1,
  },
  {
    img: Episode2,
    title: "Episode2",
    author: "author",
    rows: 1,
    cols: 2,
  },
];
/*Quilted variant has been used to allow emphasis on certain images.
Number of columns and row height are defined to ensure images are displayed to the correct width and height. 
Mobile variant has only 2 columns defined. 
*/
const QuiltedImageList = () => (
  <ImageList className="ImageGrid" variant="quilted" cols={2} rowHeight={290}>
    {itemData.map((item) => (
      <ImageListItem
        key={item.title}
        cols={item.cols || 1}
        rows={item.rows || 1}
      >
        <img
          className="Image"
          srcSet={srcset(item.img, 220, item.rows, item.cols)}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
);

export default QuiltedImageList;
