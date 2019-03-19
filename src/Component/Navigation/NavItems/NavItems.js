import React from "react";

import "../NavItems/NavItems.css";

const navigationItem = props => (
  <li className="NavigationItem">
    <a href={props.link} className={props.active ? "active" : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
