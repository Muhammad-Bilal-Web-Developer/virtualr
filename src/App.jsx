import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import WorkFlow from "./components/WorkFlow.jsx";
import Price from "./components/Price.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-17">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer/>
      </div>
    </>
  );
}

export default App;
