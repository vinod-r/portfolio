import { CustomCursor } from "./components/CustomCursor";
import { Logo } from "./components/Logo";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Logo />
        <CustomCursor />
      </div>
    </div>
  );
}

export default App;
