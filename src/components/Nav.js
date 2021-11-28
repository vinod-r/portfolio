import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

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
      <ul>
        <li
          className={
            location.pathname === "/landing"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
          ref={homeRef}
        >
          <Link to="/landing">Home</Link>
        </li>
        <li
          className={
            location.pathname === "/portfolio"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
          ref={portfolioRef}
        >
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li
          className={
            location.pathname === "/about"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
          ref={aboutRef}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={
            location.pathname === "/resume"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
          ref={resumeRef}
        >
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};
