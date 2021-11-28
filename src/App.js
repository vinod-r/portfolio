import { Route, Routes } from "react-router";
import { BackgroundLogo } from "./components/BackgroundLogo";
import { CustomCursor } from "./components/CustomCursor";
import { Landing } from "./routes/Landing";
import { Logo } from "./components/Logo";
import { Splash } from "./routes/Splash";
import { Portfolio } from "./routes/Portfolio";
import { About } from "./routes/About";
import { Resume } from "./routes/Resume";
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
