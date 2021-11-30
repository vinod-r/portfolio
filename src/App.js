import { Route, Routes, useLocation } from "react-router";
import { BackgroundLogo } from "./components/BackgroundLogo";
import { CustomCursor } from "./components/CustomCursor";
import { Landing } from "./routes/Landing";
import { Logo } from "./components/Logo";
import { Splash } from "./routes/Splash";
import { Portfolio } from "./routes/Portfolio";
import { About } from "./routes/About";
import { Resume } from "./routes/Resume";
import "./styles/App.scss";
import { Nav } from "./components/Nav";

function App() {
  const routes = [
    { path: "/", name: "splash", Component: <Splash /> },
    { path: "/landing", name: "landing", Component: <Landing /> },
    { path: "/portfolio", name: "portfolio", Component: <Portfolio /> },
    { path: "/about", name: "about", Component: <About /> },
    { path: "/resume", name: "resume", Component: <Resume /> },
  ];
  const location = useLocation();

  // const onEnter = (node) => {
  //   console.log(node);
  //   //enter animation
  // };

  // const onExit = (node) => {
  //   //enter animation
  //   console.log(node);
  // };

  return (
    <div className="App">
      <BackgroundLogo />
      <CustomCursor />
      <Logo />
      {location.pathname === "/" ? "" : <Nav />}

      <div className="wrapper">
        <Routes>
          {routes.map(({ path, name, Component }) => (
            <Route key={name} path={path} element={Component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
