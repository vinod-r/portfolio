import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { navHoverCheckState } from "../store/atoms";

export const PortfolioListItem = ({
  number,
  title,
  subtitle,
  description,
  link,
}) => {
  const arrowRef = useRef(null);
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);

  useEffect(() => {
    const arrow = arrowRef.current;

    const mouseEnterHandler = () => {
      setNavHoverCheck(true);
    };
    const mouseLeaveHandler = () => {
      setNavHoverCheck(false);
    };

    const mouseClickHandler = () => {
      setNavHoverCheck(false);
    };

    arrow.addEventListener("mouseenter", mouseEnterHandler);
    arrow.addEventListener("mouseleave", mouseLeaveHandler);
    arrow.addEventListener("click", mouseClickHandler);

    return () => {
      arrow.removeEventListener("mouseenter", mouseEnterHandler);
      arrow.removeEventListener("mouseleave", mouseLeaveHandler);
      arrow.removeEventListener("click", mouseClickHandler);
    };
  }, [setNavHoverCheck]);
  return (
    <div className="portfolio-piece-content">
      <NavLink to={link}>
        <div className="portfolio-title-block">
          <h1
            className="portfolio-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {title}
          </h1>
          <svg
            ref={arrowRef}
            className="left-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72.49 46.09"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="M50,.29a1,1,0,0,0-1.42,1.42L68,21.1a.56.56,0,0,1-.39.95H1a1,1,0,0,0,0,2H67.56A.55.55,0,0,1,68,25L48.55,44.38a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L72.33,23.44a.57.57,0,0,0,0-.79Z" />
            </g>
          </svg>
          <h1
            className="project-number"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {number}
          </h1>
        </div>
      </NavLink>

      <h2
        className="portfolio-subtitle"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {subtitle}
      </h2>
      <p
        className="portfolio-description"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {description}
      </p>
    </div>
  );
};
