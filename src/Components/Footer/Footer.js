import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Logo from "../hoc/Logo";

const Footer = () => (
  <footer>
    <Logo className="Footer-Image" />
    <nav className="Footer">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.marvel.com/">
            Marvel.com
          </a>
        </li>
        <li>
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
