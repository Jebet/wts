import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Airtime from "../../../Containers/Table/Table";
// import Table from "../../../Containers/Table/Table";
// import HomePage from "../../../Dashboard/HomePage";
// import Daily from "../../../Containers/Daily/Daily";

import "./Menu.css";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <Router>
          <div className="links">
            <h6>
              <Link to="/dashboard" style={{ color: "white" }}>
                <i class="fas fa-tachometer-alt" />
                Dashboard
              </Link>
            </h6>
            <br />
            <h6>
              <Link to="/daily" style={{ color: "white" }}>
                <i class="far fa-comment-alt" />
                Daily
              </Link>
            </h6>
            <br />{" "}
            <h6>
              <Link to="/airtime" style={{ color: "white" }}>
                <i class="fas fa-share-square" />
                Airtime
              </Link>
            </h6>
            <br />
            <h6>
              <Link to="/settings" style={{ color: "white" }}>
                <i class="fas fa-cog" />
                Settings
              </Link>
            </h6>
          </div>
        </Router>
      </div>
    );
  }
}

export default Menu;
