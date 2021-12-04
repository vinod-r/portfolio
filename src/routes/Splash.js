import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { buttonHoverCheckState } from "../store/atoms";
import "../styles/Splash.scss";

export const Splash = () => {
  //declaring refs and recoil states
  const mouseCheckRef = useRef(null);
  const setButtonHoverCheck = useSetRecoilState(buttonHoverCheckState);

  //checking cursor hover over buttons
  useEffect(() => {
    const enterButton = mouseCheckRef.current;
    const mouseEnterHandler = () => {
      setButtonHoverCheck(true);
    };
    const mouseLeaveHandler = () => {
      setButtonHoverCheck(false);
    };

    const mouseClickHandler = () => {
      setButtonHoverCheck(false);
    };

    enterButton.addEventListener("mouseenter", mouseEnterHandler);
    enterButton.addEventListener("mouseleave", mouseLeaveHandler);
    enterButton.addEventListener("click", mouseClickHandler);
    return () => {
      enterButton.removeEventListener("mouseenter", mouseEnterHandler);
      enterButton.removeEventListener("mouseleave", mouseLeaveHandler);
      enterButton.removeEventListener("click", mouseClickHandler);
    };
  }, [setButtonHoverCheck]);

  return (
    <div className="splash-frame" data-aos="fade-up" data-aos-duration="800">
      <h1 className="title">
        Vinod<span>Reddy</span>
      </h1>
      <h2 className="subtitle">UX Designer</h2>

      <Link to="/landing" className="enter" ref={mouseCheckRef}>
        enter
      </Link>
    </div>
  );
};
