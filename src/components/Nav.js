import React from "react";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { navHoverCheckState } from "../store/atoms";
import "../styles/Nav.scss";

export const Nav = () => {
  //declaring refs
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);

  //checking for hover on nav elements to trigger cursor state
  useEffect(() => {
    const navList = [homeRef.current, portfolioRef.current, aboutRef.current];

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

  //check if nav link is active
  const checkLinkActive = (navData) => {
    if (navData.isActive) {
      return "nav-item active-nav-item";
    } else {
      return "nav-item";
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li ref={homeRef}>
            <NavLink
              to="/landing"
              className={(navData) => checkLinkActive(navData)}
            >
              Home
            </NavLink>
          </li>
          <li ref={portfolioRef}>
            <NavLink
              to="/portfolio"
              className={(navData) => checkLinkActive(navData)}
            >
              Portfolio
            </NavLink>
          </li>
          <li ref={aboutRef}>
            <NavLink
              to="/about"
              className={(navData) => checkLinkActive(navData)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="background-circle"></div>
    </>
  );
};
