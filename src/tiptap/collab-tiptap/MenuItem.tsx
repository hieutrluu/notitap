import "./MenuItem.scss";

import React from "react";
// import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

export default ({ icon, title, action, isActive = null }) => (
  <button
    className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
    onClick={action}
    title={title}
  />
);
