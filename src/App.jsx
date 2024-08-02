import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    // Check if the device is mobile and set the warning accordingly
    if (isMobile) {
      setShowMobileWarning(true);
      // Disable scrolling when the mobile warning is displayed
      document.body.style.overflow = "hidden";
    }

    // Cleanup function to reset scroll behavior when the component unmounts or changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <BrowserRouter>
      {showMobileWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4">Unsupported Device</h2>
            <p className="text-lg">
              This website is optimized for PC. Mobile devices are not
              supported at this time.
            </p>
          </div>
        </div>
      )}

      <div
        className={`relative z-0 bg-primary ${
          showMobileWarning ? "opacity-50" : ""
        }`}
      >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <StarsCanvas />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
