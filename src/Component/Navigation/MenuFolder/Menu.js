import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import HomePage from "../../../Dashboard/HomePage";
import Airtime from "../../../Containers/Table/Table";
import Daily from "../../../Containers/Daily/Daily";
import "./Menu.css";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <Router>
        <div
          id="flyoutMenu"
          onMouseDown={this.props.handleMouseDown}
          className={visibility}
        >
          <Link to="/home">Dashboard</Link>
          <Link to="/daily">Daily</Link>
          <Link to="#">Home</Link>
        </div>
      </Router>
    );
  }
}

export default Menu;
