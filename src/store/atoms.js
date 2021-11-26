import { atom } from "recoil";

export const mousePosition = atom({
  key: "mousePosition",
  default: { x: 0, y: 0 },
});

export const logoHoverCheckState = atom({
  key: "logoHoverCheckState",
  default: false,
});
