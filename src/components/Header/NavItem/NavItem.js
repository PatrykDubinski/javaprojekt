import React from "react";
import "./NavItem.css";

const NavItem = ({ children }) => {
  return <li className="navItem">{children}</li>;
};

export default NavItem;
