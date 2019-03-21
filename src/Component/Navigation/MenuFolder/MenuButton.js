import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component {
  render() {
    return (
      <button
        class="toggle"
        style={{ backgroundColor: "#eee" }}
        onMouseDown={this.props.handleMouseDown}
      >
        <i class="fa fa-bars" />
      </button>
    );
  }
}

export default MenuButton;
