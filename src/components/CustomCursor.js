import React from "react";
import "../styles/Cursor.scss";
import useMousePosition from "../hooks/useMousePosition";
import { useRecoilValue } from "recoil";
import { logoHoverCheckState } from "../store/atoms";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const logoHoverCheck = useRecoilValue(logoHoverCheckState);

  return (
    <>
      {}
      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: logoHoverCheck ? "0" : "1",
        }}
        className="ring"
      ></div>
      <div
        className="dot"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: logoHoverCheck ? "0" : "1",
        }}
      ></div>
    </>
  );
};
