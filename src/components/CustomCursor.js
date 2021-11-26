import React from "react";
import "../styles/Cursor.scss";
import useMousePosition from "../hooks/useMousePosition";
import { useRecoilValue } from "recoil";
import { buttonHoverCheckState, logoHoverCheckState } from "../store/atoms";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const logoHoverCheck = useRecoilValue(logoHoverCheckState);
  const buttonHoverCheck = useRecoilValue(buttonHoverCheckState);

  const hoverCheck = () => {
    let result = false;
    if (logoHoverCheck || buttonHoverCheck) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  return (
    <>
      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: hoverCheck() ? "0" : "1",
          width: hoverCheck() ? "120px" : "40px",
          height: hoverCheck() ? "120px" : "40px",
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
    </>
  );
};
