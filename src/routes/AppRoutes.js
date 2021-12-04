import React from "react";
import { Routes, Route } from "react-router";
import App from "../App";
import { About } from "./About";
import { Landing } from "./Landing";
import { Portfolio } from "./Portfolio";
import { Splash } from "./Splash";
import { PortfolioContent } from "../components/PortfolioContent";
import { PortfolioPiece } from "../components/PortfolioPiece";

export const AppRoutes = () => {
  //all app routes for the entire page
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Splash />} />
        <Route path="landing" element={<Landing />} />
        <Route path="portfolio" element={<Portfolio />}>
          <Route path="/portfolio/" element={<PortfolioContent />} />
          <Route path="/portfolio/:name" element={<PortfolioPiece />} />
        </Route>
        <Route path="About" element={<About />} />
      </Route>
    </Routes>
  );
};
