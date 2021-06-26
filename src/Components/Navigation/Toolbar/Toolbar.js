import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Toolbar.css";
import Logo from "../../hoc/Logo";
import DrawerToggle from "../DrawerToggle/DrawerToggle";

const Toolbar = ({ drawerToggleClicked }) => (
  <Fragment>
    <div>
      {/*When screen size is less than 767px then show Mobile toolbar with hamburger icon */}
      <nav className="Mobile-Toolbar">
        <DrawerToggle clicked={drawerToggleClicked} />
      </nav>
    </div>
    {/*When screen size is greater than 767px then show Desktop toolbar */}
    <div className="Desktop">
      <nav className="Toolbar">
        <div className="MaxWidth">
          {/*Display Logo top right */}
          <Logo className="Toolbar-Image" />
          <ul>
            {/*When Home is clicked redirect to the Home page */}
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            {/*When Episodes is clicked redirect to the Episodes page */}
            <li>
              <NavLink to="/episodes">Episodes</NavLink>
            </li>
            {/*When Characters is clicked redirect to the Characters page */}
            <li>
              <NavLink to="/characters">Characters</NavLink>
            </li>
            {/*When Gallery is clicked redirect to the Gallery page */}
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </Fragment>
);

export default Toolbar;
