import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Logo from "../hoc/Logo";

/*Footer component displays at the bottom of each page containing the sitemap and the site's logo.
Unordered list is used to display the navigational links. 
NavLink is used to enable the user to click on the relevant list item and redirect to the expected page*/
const Footer = () => (
  <footer>
    <Logo className="Footer-Image" />
    <nav className="Footer">
      <ul>
        <li>
          {/*When Home is clicked redirect to the Home page */}
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          {/*When Episodes is clicked redirect to the Episodes page */}
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <li>
          {/*When Characters is clicked redirect to the Characters page */}
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          {/*When Gallery is clicked redirect to the Gallery page */}
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          {/*When  Marvel.com is clicked redirect to the  Marvel.com */}
          <a target="_blank" rel="noreferrer" href="https://www.marvel.com/">
            Marvel.com
          </a>
        </li>
        <li>
          {/*When Disney+ is clicked redirect to the Disney+.com */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.disneyplus.com/"
          >
            Disney+
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
