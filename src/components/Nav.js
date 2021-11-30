import React from "react";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { navHoverCheckState } from "../store/atoms";
import "../styles/Nav.scss";

export const Nav = () => {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);
  // const location = useLocation();

  useEffect(() => {
    const navList = [
      homeRef.current,
      portfolioRef.current,
      aboutRef.current,
      resumeRef.current,
    ];

    const mouseEnterHandler = () => {
      setNavHoverCheck(true);
    };
    const mouseLeaveHandler = () => {
      setNavHoverCheck(false);
    };

    const mouseClickHandler = () => {
      setNavHoverCheck(false);
    };

    navList.forEach((navItem) => {
      navItem.addEventListener("mouseenter", mouseEnterHandler);
      navItem.addEventListener("mouseleave", mouseLeaveHandler);
      navItem.addEventListener("click", mouseClickHandler);
    });

    return () => {
      navList.forEach((navItem) => {
        navItem.removeEventListener("mouseenter", mouseEnterHandler);
        navItem.removeEventListener("mouseleave", mouseLeaveHandler);
        navItem.removeEventListener("click", mouseClickHandler);
      });
    };
  }, [setNavHoverCheck]);

  return (
    <nav>
      <div className="background-circle"></div>
      <ul>
        <li ref={homeRef}>
          <NavLink
            to="/landing"
            className="nav-item"
            activeClassName="active-nav-item"
          >
            Home
          </NavLink>
        </li>
        <li ref={portfolioRef}>
          <NavLink
            to="/portfolio"
            className="nav-item"
            activeClassName="active-nav-item"
          >
            Portfolio
          </NavLink>
        </li>
        <li ref={aboutRef}>
          <NavLink
            to="/about"
            className="nav-item"
            activeClassName="active-nav-item"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item" ref={resumeRef}>
          <NavLink
            to="/resume"
            className="nav-item"
            activeClassName="activeNavItem"
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
