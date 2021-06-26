import React from "react";
import LogoImage from "../../Assets/Images/Logo.png";

//Logo component used to display the page's logo through the website
const Logo = ({ className }) => (
  //When clicked the Logo will redirect to the Home page
  <div onClick={() => window.open("/home", "_self")}>
    {/*Logo accepts className properties to allow custom styling and the Logo Image from the Image folder */}
    <img className={className} src={LogoImage} alt="Logo" />
  </div>
);
export default Logo;
