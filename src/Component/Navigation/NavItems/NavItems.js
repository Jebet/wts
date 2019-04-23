import React from "react";

import "../NavItems/NavItems.css";

const navigationItem = props => (
  <div className="NavigationItem">
    <a href={props.link} className={props.active ? "active" : null}>
      {props.children}
    </a>
  </div>
);

export default navigationItem;
