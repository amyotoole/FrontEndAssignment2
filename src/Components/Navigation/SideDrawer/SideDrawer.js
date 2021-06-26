import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";
import Logo from "../../hoc/Logo";
import NavChevron from "../../../Assets/Images/NavChevron.png";

const SideDrawer = ({ open, closed }) => (
  //If open is set to true then store SideDrawer is open
  <div className={`SideDrawer ${open ? "Open" : "Close"}`} onClick={closed}>
    {/*Close SideDrawer if clicked */}
    {/*Display Logo top left */}
    <Logo className="SideDrawerLogo" />
    {/*Display close button top right */}
    <h1 onClick={closed}>X</h1>
    {/*Create Navigational List for SideDrawer menu*/}
    <nav>
      <ul>
        <li>
          {/*When Home is clicked redirect to the Home page */}
          <NavLink to="/home">
            Home
            <img src={NavChevron} alt="NavChevron" className="Chevron" />
          </NavLink>
        </li>
        {/*When Episodes is clicked redirect to the Episodes page */}
        <li>
          <NavLink to="/episodes">
            Episodes
            <img src={NavChevron} alt="NavChevron" className="Chevron" />
          </NavLink>
        </li>
        {/*When Characters is clicked redirect to the Characters page */}
        <li>
          <NavLink to="/characters">
            Characters
            <img src={NavChevron} alt="NavChevron" className="Chevron" />
          </NavLink>
        </li>
        {/*When Gallery is clicked redirect to the Gallery page */}
        <li>
          <NavLink to="/gallery">
            Gallery
            <img src={NavChevron} alt="NavChevron" className="Chevron" />
          </NavLink>
        </li>
        {/*When Marvel.com is clicked redirect to the Marvel website */}
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.marvel.com/">
            Marvel.com
            <img src={NavChevron} alt="NavChevron" className="Chevron" />
          </a>
        </li>
        {/*When Disney+.com is clicked redirect to the Disney+ website */}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.disneyplus.com/"
          >
            Disney+
            <img src={NavChevron} alt="NavChevron" className="Chevron" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideDrawer;
