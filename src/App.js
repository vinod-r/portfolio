import { Route, Routes } from "react-router";
import { BackgroundLogo } from "./components/BackgroundLogo";
import { CustomCursor } from "./components/CustomCursor";
import { Landing } from "./components/Landing";
import { Logo } from "./components/Logo";
import { Splash } from "./components/Splash";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <BackgroundLogo />
      <CustomCursor />
      <div className="wrapper">
        <Logo />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
