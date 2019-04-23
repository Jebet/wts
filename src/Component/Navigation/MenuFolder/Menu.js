import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SideNav, MenuIcon } from "react-simple-sidenav";
// import HomePage from "../../../Dashboard/HomePage";
// import Airtime from "../../../Containers/Table/Table";
// import Daily from "../../../Containers/Daily/Daily";
// import Navigation from "../NavigationItems/Navigation";
import "./Menu.css";
// import NavigationItems from "../NavigationItems/Navigation";
import NavItem from "../NavItems/NavItems";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showNav: false
    };
  }
  render() {
    // const childProps = {
    //   isAuthenticated: this.state.isAuthenticated,
    //   userHasAuthenticated: this.userHasAuthenticated
    // };
    return (
      <div>
        <MenuIcon onClick={() => this.setState({ showNav: true })} />
        <Router>
          <SideNav
            showNav={this.state.showNav}
            onHideNav={() => this.setState({ showNav: false })}
            title="Hello User"
            titleStyle={{ backgroundColor: "#800080" }}
            itemStyle={{
              backgroundColor: "#000",
              right: "40px",
              width: "400px"
            }}
            itemHoverStyle={{ backgroundColor: "#000" }}
            items={[
              <NavItem link="/home">
                <i className="icon-dashboard" />
                Dashboard
              </NavItem>,
              <NavItem link="/daily">Daily</NavItem>,
              <NavItem link="/airtime">Airtime</NavItem>,
              <NavItem>Settings</NavItem>,
              <NavItem link="/login">Logout</NavItem>
            ]}
          />
        </Router>
      </div>
    );
  }
}

export default Menu;
