import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Background from "./components/Background";
import BottomBirds from "./components/BottomBirds";
import FlyingBirds from "./components/FlyingBirds";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(0deg, #007AFF, #007AFF)",
      }}
    >
      <Navbar />
      <HeroSection isVisible={isVisible} />
      <Background isVisible={isVisible} />
      <BottomBirds isVisible={isVisible} />
      <FlyingBirds isVisible={isVisible} />
      <ScrollIndicator />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
