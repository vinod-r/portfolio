import { Outlet, useLocation } from "react-router";
import { BackgroundLogo } from "./components/BackgroundLogo";
import { CustomCursor } from "./components/CustomCursor";
import { Logo } from "./components/Logo";
import "./styles/App.scss";
import { Nav } from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <BackgroundLogo />
      <CustomCursor />
      <Logo />
      {location.pathname === "/" ? "" : <Nav />}

      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
