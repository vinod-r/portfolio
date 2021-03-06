import React from "react";
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import useMousePosition from "../hooks/useMousePosition";
import { logoHoverCheckState } from "../store/atoms";

export const Logo = () => {
  //declaring refs and recoil variables
  const { x, y } = useMousePosition();
  const logoOverlayRef = useRef(null);
  const mouseCheckRef = useRef(null);
  const relativeX = useRef(null);
  const relativeY = useRef(null);
  const setLogoHoverCheck = useSetRecoilState(logoHoverCheckState);

  //checking for cursor hovering over logo for logo hover effect
  useEffect(() => {
    if (
      document.elementFromPoint(x, y) === mouseCheckRef.current ||
      mouseCheckRef.current.contains(document.elementFromPoint(x, y))
    ) {
      const logoOverlay = logoOverlayRef.current;
      const rect = logoOverlay.getBoundingClientRect();
      relativeX.current = x - rect.left;
      relativeY.current = y - rect.top;
    } else {
      relativeX.current = -15;
      relativeY.current = -15;
    }

    if (mouseCheckRef.current.contains(document.elementFromPoint(x, y))) {
      setLogoHoverCheck(true);
    } else {
      setLogoHoverCheck(false);
    }
  });

  return (
    <NavLink to="/landing" className="home-link">
      <p style={{ display: "none" }}>Text to fix WAVE missing link error</p>
      <div className="logo" ref={mouseCheckRef}>
        <div className="vr-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.54 26.77">
            <g id="logo" data-name="Layer 1">
              <path d="M20.53.1c-1.27,0-2.67,0-4.18-.1V.67a3.44,3.44,0,0,1,2.09.67,2.39,2.39,0,0,1,.72,1.94,12.71,12.71,0,0,1-.94,4.08L15,16.07l.4,1L20,4.65a9.55,9.55,0,0,1,1.44-2.71A3.93,3.93,0,0,1,23.07.67V0C22.4.07,21.55.1,20.53.1Z" />
              <path d="M14.52,19.47l-1,2.64-.16.44-1.53,4.22-1.22-3L10,22.12,2.1,2.81a4.16,4.16,0,0,0-1-1.61A1.9,1.9,0,0,0,0,.67V0C1.34.07,3,.1,5.08.1c2.3,0,4,0,5.08-.1V.67a5.42,5.42,0,0,0-1.8.3.92.92,0,0,0-.54.94,4.76,4.76,0,0,0,.4,1.57l3.89,9.88,2,5.09Z" />
              <path d="M46.54,24.62a5.63,5.63,0,0,1-1.93,1.65,5.82,5.82,0,0,1-2.51.5A4.67,4.67,0,0,1,39,25.86a4.74,4.74,0,0,1-1.46-3.09L37,19.06a15.52,15.52,0,0,0-1-4,2.13,2.13,0,0,0-2.06-1.27H31.7v8.52a8.15,8.15,0,0,0,.18,2,1.25,1.25,0,0,0,.69.86,5.77,5.77,0,0,0,1.64.3v.74c-1.21-.08-2.89-.12-5.05-.12-2.39,0-4.15,0-5.29.12v-.74a5.82,5.82,0,0,0,1.62-.3,1.28,1.28,0,0,0,.71-.86,8.15,8.15,0,0,0,.18-2V3.93a8.11,8.11,0,0,0-.18-2A1.25,1.25,0,0,0,25.49,1a5.17,5.17,0,0,0-1.62-.3V0C25,.08,26.7.11,29,.11l3.71,0c.32,0,.69,0,1.09,0h.45c3.07,0,5.38.57,6.93,1.68a5.52,5.52,0,0,1,2.33,4.78,11.61,11.61,0,0,1-.82,4.63,3.33,3.33,0,0,1-1.4,1.67,10.93,10.93,0,0,1-2.91.85,6.64,6.64,0,0,1,1.69.42,4,4,0,0,1,1.8,2.15,23.11,23.11,0,0,1,.84,3.88c.16.76.32,1.51.46,2.27a7,7,0,0,0,.62,2.08,1.12,1.12,0,0,0,1,.59,1.44,1.44,0,0,0,.68-.22,3.36,3.36,0,0,0,.66-.63Z" />
            </g>
          </svg>
        </div>
        <div
          className="vr-logo-fill"
          style={{
            clipPath: `circle(18px at ${relativeX.current}px ${relativeY.current}px)`,
          }}
          ref={logoOverlayRef}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.54 26.77">
            <g id="logo" data-name="Layer 1">
              <path d="M20.53.1c-1.27,0-2.67,0-4.18-.1V.67a3.44,3.44,0,0,1,2.09.67,2.39,2.39,0,0,1,.72,1.94,12.71,12.71,0,0,1-.94,4.08L15,16.07l.4,1L20,4.65a9.55,9.55,0,0,1,1.44-2.71A3.93,3.93,0,0,1,23.07.67V0C22.4.07,21.55.1,20.53.1Z" />
              <path d="M14.52,19.47l-1,2.64-.16.44-1.53,4.22-1.22-3L10,22.12,2.1,2.81a4.16,4.16,0,0,0-1-1.61A1.9,1.9,0,0,0,0,.67V0C1.34.07,3,.1,5.08.1c2.3,0,4,0,5.08-.1V.67a5.42,5.42,0,0,0-1.8.3.92.92,0,0,0-.54.94,4.76,4.76,0,0,0,.4,1.57l3.89,9.88,2,5.09Z" />
              <path d="M46.54,24.62a5.63,5.63,0,0,1-1.93,1.65,5.82,5.82,0,0,1-2.51.5A4.67,4.67,0,0,1,39,25.86a4.74,4.74,0,0,1-1.46-3.09L37,19.06a15.52,15.52,0,0,0-1-4,2.13,2.13,0,0,0-2.06-1.27H31.7v8.52a8.15,8.15,0,0,0,.18,2,1.25,1.25,0,0,0,.69.86,5.77,5.77,0,0,0,1.64.3v.74c-1.21-.08-2.89-.12-5.05-.12-2.39,0-4.15,0-5.29.12v-.74a5.82,5.82,0,0,0,1.62-.3,1.28,1.28,0,0,0,.71-.86,8.15,8.15,0,0,0,.18-2V3.93a8.11,8.11,0,0,0-.18-2A1.25,1.25,0,0,0,25.49,1a5.17,5.17,0,0,0-1.62-.3V0C25,.08,26.7.11,29,.11l3.71,0c.32,0,.69,0,1.09,0h.45c3.07,0,5.38.57,6.93,1.68a5.52,5.52,0,0,1,2.33,4.78,11.61,11.61,0,0,1-.82,4.63,3.33,3.33,0,0,1-1.4,1.67,10.93,10.93,0,0,1-2.91.85,6.64,6.64,0,0,1,1.69.42,4,4,0,0,1,1.8,2.15,23.11,23.11,0,0,1,.84,3.88c.16.76.32,1.51.46,2.27a7,7,0,0,0,.62,2.08,1.12,1.12,0,0,0,1,.59,1.44,1.44,0,0,0,.68-.22,3.36,3.36,0,0,0,.66-.63Z" />
            </g>
          </svg>
        </div>
      </div>
    </NavLink>
  );
};
