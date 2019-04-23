import React from "react";

import "./Toolbar.css";
//import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/Navigation";
import DrawerToggle from "../SideDrawer/ToggleDrawer/ToggleDrawer";
import logo from "../../../Assets/logo/logo.png";
import Menu from "../MenuFolder/Menu";
// import SidebarExampleSidebar from "../SideBar/sideBar";

// const toolbar = props => (
//   <header className="Toolbar">
//     <Menu />
//     <DrawerToggle clicked={props.drawerToggleClicked} />
//     <div className="toolbar-logo">
//       <a href="/home">
//         <p>Shujaaz</p>
//       </a>
//     </div>

//     <nav className="DesktopOnly">
//       <NavigationItems />
//     </nav>
//   </header>
// );

// export default toolbar;

class toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <a href="/home">Dashboard</a>
              <a href="airtime">Airtime</a>
              <a href="/daily">Dailies</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
            <div className="narrowLinks">
              <a href="/home" onClick={this.burgerToggle}>
                Dashboard
              </a>
              <a href="/airtime" onClick={this.burgerToggle}>
                Airtime
              </a>
              <a href="/daily" onClick={this.burgerToggle}>
                Dailies
              </a>
              <a href="/logout" onClick={this.burgerToggle}>
                Logout
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default toolbar;
