import DesktopContainer from "./components/DesktopContainer/index";
import Hero from "./components/Hero/index";
import YourResults from "./components/YourResults/index";
import Tips from "./components/Tips/index";
import TipComponent from "./components/TipComponent/index";

import CurvedLineLeft from "./ui/CurvedLineLeft/index";

import Eating from "./assets/images/icon-eating.svg";
import Exercise from "./assets/images/icon-exercise.svg";
import Sleep from "./assets/images/icon-sleep.svg";

import "./globals.css";

function App() {
  return (
    <DesktopContainer>
      <Hero></Hero>
      <YourResults></YourResults>
      <Tips>
        <TipComponent>
          <img src={Eating} alt="" />
        </TipComponent>
        <TipComponent>
          <img src={Exercise} alt="" />
        </TipComponent>
        <TipComponent>
          <img src={Sleep} alt="" />
        </TipComponent>
      </Tips>
      <CurvedLineLeft />
    </DesktopContainer>
  );
}

export default App;
