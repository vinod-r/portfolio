import React from "react";
import "../styles/Cursor.scss";
import useMousePosition from "../hooks/useMousePosition";
import { useRecoilValue } from "recoil";
import {
  buttonHoverCheckState,
  logoHoverCheckState,
  navHoverCheckState,
} from "../store/atoms";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const logoHoverCheck = useRecoilValue(logoHoverCheckState);
  const buttonHoverCheck = useRecoilValue(buttonHoverCheckState);
  const navHoverCheck = useRecoilValue(navHoverCheckState);

  const hoverCheck = () => {
    let result = false;
    if (logoHoverCheck || buttonHoverCheck || navHoverCheck) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  const sizeCheck = () => {
    let size = "0px";
    if (buttonHoverCheck) {
      size = "120px";
    } else {
      size = "80px";
    }
    return size;
  };

  return (
    <>
      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: hoverCheck() ? "0" : "1",
          width: hoverCheck() ? sizeCheck() : "40px",
          height: hoverCheck() ? sizeCheck() : "40px",
        }}
        className="ring"
      ></div>
      <div
        className="dot"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: hoverCheck() ? "0" : "1",
        }}
      ></div>

      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: buttonHoverCheck ? "1" : "0",
          width: buttonHoverCheck ? "120px" : "8px",
          height: buttonHoverCheck ? "120px" : "8px",
        }}
        className="button-hover"
      ></div>

      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: navHoverCheck ? "1" : "0",
          width: navHoverCheck ? "80px" : "8px",
          height: navHoverCheck ? "80px" : "8px",
        }}
        className="nav-hover"
      ></div>
    </>
  );
};
