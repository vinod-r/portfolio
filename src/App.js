import { Outlet, useLocation } from "react-router";
import { BackgroundLogo } from "./components/BackgroundLogo";
import { CustomCursor } from "./components/CustomCursor";
import { Logo } from "./components/Logo";
import "./styles/App.scss";
import { Nav } from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavMobile } from "./components/NavMobile";
import { useRecoilState } from "recoil";
import { windowWidthState } from "./store/atoms";

function App() {
  //declaring location and recoil states
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);
  const location = useLocation();

  //initializing Animate on Scroll Library and setting initial window width for responsiveness
  useEffect(() => {
    AOS.init();
    setWindowWidth(window.innerWidth);
  }, [setWindowWidth]);

  //updating window width on resize to check which nav to display
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowWidth]);

  return (
    <div className="App">
      <BackgroundLogo />
      <CustomCursor />
      <Logo />
      {/* checking which nav to display (mobile or web) */}
      {windowWidth > 500 && location.pathname !== "/" ? <Nav /> : ""}
      {windowWidth <= 500 && location.pathname !== "/" ? <NavMobile /> : ""}

      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
