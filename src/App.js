import DesktopContainer from "./components/DesktopContainer/index";
import Hero from "./components/Hero/index";
import YourResults from "./components/YourResults/index";
import Tips from "./components/Tips/index";
import Limitations from "./components/Limitations/index";

import CurvedLineLeft from "./ui/CurvedLineLeft/index";

import "./globals.css";

function App() {
  return (
    <DesktopContainer>
      <Hero></Hero>
      <YourResults></YourResults>
      <Tips></Tips>
      <Limitations></Limitations>
      <CurvedLineLeft />
    </DesktopContainer>
  );
}

export default App;
