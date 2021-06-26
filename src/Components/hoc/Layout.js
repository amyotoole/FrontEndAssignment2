import React, { Fragment, useState } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Footer from "../Footer/Footer";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

//Layout creates a template to be implemented within each page
const Layout = ({ children }) => {
  const [showSideDrawer, toggleSideDrawer] = useState(false);

  //Logic to handle when SideDrawer is closed and sets ShowSideDrawer state to false
  const closeSideDrawer = () => {
    toggleSideDrawer(false);
  };

  const toggleSideDrawerHandler = () => {
    toggleSideDrawer(!showSideDrawer);
  };

  return (
    <Fragment>
      <header>
        {/*Layout displays the Toolbar, SideDrawer, page body and Footer */}
        {/*Toolbar sets drawerToggleClicked component to the SideDrawerToggleHandler */}
        <Toolbar drawerToggleClicked={toggleSideDrawerHandler} />
        {/*SideDrawer sets the open and closed properties to the appropriate logic */}
        <SideDrawer open={showSideDrawer} closed={closeSideDrawer} />
      </header>

      {/*Main tag accepts the children property */}
      <main>{children}</main>
      {/*Footer component is rendered at the bottom of the page */}
      <Footer />
    </Fragment>
  );
};
export default Layout;
