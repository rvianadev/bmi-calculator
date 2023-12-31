import Container from "./components/Container/index";
import Hero from "./components/Hero/index";
import YourResults from "./components/YourResults/index";
import Tips from "./components/Tips/index";
import Limitations from "./components/Limitations/index";

import CurvedLineLeft from "./ui/CurvedLineLeft/index";
import CurvedLineRight from "./ui/CurvedLineRight/index";

import "./globals.css";

function App() {
  return (
    <Container>
      <Hero />
      <YourResults />
      <Tips />
      <Limitations />
      <CurvedLineLeft />
      <CurvedLineRight />
    </Container>
  );
}

export default App;
