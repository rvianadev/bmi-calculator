import DesktopContainer from "./components/DesktopContainer/index";
import Hero from "./components/Hero/index";
import RadioInputComponent from "./ui/RadioInputComponent/index";
import "./globals.css";

function App() {
  return (
    <DesktopContainer>
      <Hero></Hero>
      <RadioInputComponent></RadioInputComponent>
    </DesktopContainer>
  );
}

export default App;
