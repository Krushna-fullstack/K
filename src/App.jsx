import React from "react";
import ShinyText from "./ui/ShinyText";
import DialogBox from "./components/DialogBox";
import Particles from "./ui/Particles";
import CircularGallery from "./ui/CircularGallery";
import SplashCursor from "./ui/SplashCursor";
import BlurText from "./ui/BlurText";
import FallingText from "./ui/FallingText";

const App = () => {
  return (
    <div className="bg-black text-white h-screen relative">
      {/* Added relative positioning */}
      <DialogBox />

      {/* Particles Background */}
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Absolute positioned container for the text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <ShinyText
          text="Happy Birthday Upasana"
          speed={5}
          className="text-6xl font-bold text-center mix-blend-overlay"
        />
      </div>
      <h1 className="text-3xl font-bold text-center">Queens Collection</h1>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <SplashCursor />
      <FallingText
        text={`Upasana, you are a melody of laughter, a spark of joy, and a light that brightens every moment. Wishing you a birthday filled with endless happiness and dreams as beautiful as your soul.`}
        highlightWords={["Upasana", "joy", "light", "happiness", "soul"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
};

export default App;
