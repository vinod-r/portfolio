import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

export const NavMobile = () => {
  //check if nav link is active
  const checkLinkActive = (navData) => {
    if (navData.isActive) {
      return "nav-item active-nav-item";
    } else {
      return "nav-item";
    }
  };

  return (
    <div className="nav-mobile">
      <ul>
        <li>
          <NavLink
            to="/landing"
            className={(navData) => checkLinkActive(navData)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={(navData) => checkLinkActive(navData)}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(navData) => checkLinkActive(navData)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
