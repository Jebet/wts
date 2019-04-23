import React from "react";
// import Fragment from "react";
// import {  Nav } from "react-router-bootstrap";
// import logo from "../../../Assets/logo/logo.png";
import "../../Navigation/NavigationItems/Navigation.css";
import NavItem from "../NavItems/NavItems";

const navigation = () => (
  <ul className="NavigationItems">
    <NavItem link="/home">Dashboard</NavItem>
    <NavItem link="/daily">Daily</NavItem>
    <NavItem link="/airtime">Airtime</NavItem>
    <NavItem link="/login">Logout</NavItem>
  </ul>
);

export default navigation;
