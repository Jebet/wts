import React from "react";
import NavigationItems from "../../NavigationItems/Navigation";
import "../sideDrawer/SideDrawer.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Aux from "../../../../Hoc/ReactAux";
import logo from "../../../../Assets/logo/logo.png";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="toolbar-logo">
          <a href="/home">
            <img src={logo} className="logoImage" alt="shujaaz" />
          </a>
          {/* <Sidebar /> */}
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
