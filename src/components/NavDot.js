import React from "react";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Nav.scss";

export const NavDot = () => {
  const navDotRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const navDot = navDotRef.current;

    if (location.pathname === "/landing") {
      navDot.style.top = "8px";
    } else if (location.pathname === "/portfolio") {
      navDot.style.top = "92px";
    } else if (location.pathname === "/about") {
      navDot.style.top = "177px";
    } else {
      navDot.style.top = "261px";
    }
  }, [location.pathname]);

  return <div className="nav-dot" ref={navDotRef}></div>;
};
