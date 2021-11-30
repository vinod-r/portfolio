import React from "react";

export const PortfolioListItem = ({
  number,
  title,
  subtitle,
  description,
  reference,
}) => {
  return (
    <div className="portfolio-piece-content" ref={reference}>
      <div className="portfolio-title-block">
        <h1 className="portfolio-title">{title}</h1>
        <svg
          className="left-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72.49 46.09"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M50,.29a1,1,0,0,0-1.42,1.42L68,21.1a.56.56,0,0,1-.39.95H1a1,1,0,0,0,0,2H67.56A.55.55,0,0,1,68,25L48.55,44.38a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L72.33,23.44a.57.57,0,0,0,0-.79Z" />
          </g>
        </svg>
        <h1 className="project-number">{number}</h1>
      </div>

      <h2 className="portfolio-subtitle">{subtitle}</h2>
      <p className="portfolio-description">{description}</p>
    </div>
  );
};
