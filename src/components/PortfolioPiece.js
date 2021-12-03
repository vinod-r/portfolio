import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import "../styles/PortfolioPiece.scss";

export const PortfolioPiece = () => {
  const projectName = useParams().name;
  const navigate = useNavigate();
  const projectList = {
    headball: {
      //content
    },
    snacc: {
      //content
    },
    placeholder: {
      //content
    },
  };
  return (
    <div className="portfolio-piece-content">
      <button className="back-button" onClick={() => navigate("/portfolio")}>
        Back
      </button>

      {<p>{projectName}</p>}
    </div>
  );
};
