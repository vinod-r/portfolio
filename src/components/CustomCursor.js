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
  //declaring refs
  const { x, y } = useMousePosition();
  const logoHoverCheck = useRecoilValue(logoHoverCheckState);
  const buttonHoverCheck = useRecoilValue(buttonHoverCheckState);
  const navHoverCheck = useRecoilValue(navHoverCheckState);

  //checking if cursor is hovering over interactive item
  const hoverCheck = () => {
    if (logoHoverCheck || buttonHoverCheck || navHoverCheck) {
      return true;
    } else {
      return false;
    }
  };

  //checking what the size of the cursor should be based on hovered element
  const sizeCheck = () => {
    let size = "0px";
    if (buttonHoverCheck) {
      size = "120px";
    } else {
      size = "80px";
    }
    return size;
  };

  //checking what the color of the cursor should be based on the hovered element
  const colorCheck = (type) => {
    if (buttonHoverCheck) {
      if (type === "background") {
        return "#ffffff20";
      } else {
        return "#ffffff";
      }
    } else if (navHoverCheck) {
      if (type === "background") {
        return "#16a08520";
      } else {
        return "#16a085";
      }
    } else {
      if (type === "background") {
        return "transparent";
      } else {
        return "#16a085";
      }
    }
  };

  return (
    <>
      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: hoverCheck() ? sizeCheck() : "40px",
          height: hoverCheck() ? sizeCheck() : "40px",
          backgroundColor: colorCheck("background"),
          border: `${colorCheck("border")} 2px solid`,
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
    </>
  );
};
