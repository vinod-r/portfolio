import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { mousePosition } from "../store/atoms";

export default function useMousePosition() {
  const [currentMousePosition, setCurrentMousePosition] =
    useRecoilState(mousePosition);

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setCurrentMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  return currentMousePosition;
}
