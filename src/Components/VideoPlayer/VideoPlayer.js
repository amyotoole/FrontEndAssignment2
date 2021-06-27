import React from "react";
import PlayIcon from "../../Assets/Images/PlayIcon.png";
import "./VideoPlayer.css";

/*VideoPlayer used to display the Play Icon and onClick redirects to the passed url.
This component is passed to the Episode Descriptions to allow the user to view the associated episode on disney+
*/
const VideoPlayer = ({ url, className }) => (
  <img
    className={`VideoPlayer ${className}`}
    alt="VideoPlayer"
    src={PlayIcon}
    onClick={() => {
      window.location.href = url;
    }}
  />
);

export default VideoPlayer;
