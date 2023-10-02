import DesktopContainer from "./components/DesktopContainer/index";
import Hero from "./components/Hero/index";
import YourResults from "./components/YourResults/index";
import CurvedLineLeft from "./ui/CurvedLineLeft/index";

import "./globals.css";

function App() {
  return (
    <DesktopContainer>
      <Hero></Hero>
      <YourResults></YourResults>
      <CurvedLineLeft />
    </DesktopContainer>
  );
}

export default App;
