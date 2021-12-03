import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { buttonHoverCheckState } from "../store/atoms";
import "../styles/Splash.scss";

export const Splash = () => {
  const mouseCheckRef = useRef(null);
  const splashFrameRef = useRef(null);
  const setButtonHoverCheck = useSetRecoilState(buttonHoverCheckState);

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

  // useEffect(() => {
  //   gsap.from(splashFrameRef.current, {
  //     duration: 1.2,
  //     ease: "power4.out",
  //     y: "1000px",
  //     opacity: 0,
  //   });
  // }, [splashFrameRef]);

  return (
    <div className="splash-frame" ref={splashFrameRef}>
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
