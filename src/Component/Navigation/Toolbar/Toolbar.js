import React from "react";

import "./Toolbar.css";
//import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/Navigation";
import DrawerToggle from "../SideDrawer/ToggleDrawer/ToggleDrawer";
import logo from "../../../Assets/logo/logo.png";

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="toolbar-logo">
      <a href="/home">
        <img src={logo} className="logoImage" alt="shujaaz" />
      </a>
    </div>

    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;