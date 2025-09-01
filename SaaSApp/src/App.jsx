import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900">
        <Navbar />
        <MainSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </div>
    </ParallaxProvider>
  );
}

export default App;
