import React from "react";

import "../ToggleDrawer/ToggleDrawer.css";

const drawerToggle = props => (
  <div className="DrawerToggle" onClick={props.clicked} />
);

export default drawerToggle;
