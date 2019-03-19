import React from "react";

import "../../Navigation/NavigationItems/Navigation.css";
import NavItem from "../NavItems/NavItems";

const navigation = () => (
  <ul className="NavigationItems">
    <NavItem link="/home">Dashboard</NavItem>
    <NavItem link="/daily">Daily</NavItem>
    <NavItem link="/airtime">Airtime</NavItem>
  </ul>
);

export default navigation;
