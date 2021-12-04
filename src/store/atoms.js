import { atom } from "recoil";

export const mousePosition = atom({
  key: "mousePosition",
  default: { x: 0, y: 0 },
});

export const logoHoverCheckState = atom({
  key: "logoHoverCheckState",
  default: false,
});

export const buttonHoverCheckState = atom({
  key: "buttonHoverCheckState",
  default: false,
});

export const navHoverCheckState = atom({
  key: "navHoverCheckState",
  default: false,
});

export const portfolioSelectionState = atom({
  key: "portfolioSelectionState",
  default: 1,
});

export const windowWidthState = atom({
  key: "windowWidthState",
  default: 1920,
});
