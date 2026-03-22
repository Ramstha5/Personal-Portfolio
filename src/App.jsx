import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import BottomMenu from "./components/BottomMenu";
import "./App.css";

const App = () => {
  const defaultColor = "#081428";
  const [clip, setClip] = useState("circle(0px at 50% 50%)");
  const timeoutRef = useRef(null);

  // Start hold animation
  const startHold = (x, y) => {
    timeoutRef.current = setTimeout(() => {
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      setClip(`circle(${diagonal}px at ${x}px ${y}px)`);
    }, 600); // 600ms hold delay
  };

  // End hold animation
  const endHold = () => {
    clearTimeout(timeoutRef.current);
    setClip("circle(0px at 50% 50%)");
  };

  // Desktop handlers
  const handleMouseDown = (e) => startHold(e.clientX, e.clientY);
  const handleMouseUp = endHold;
  const handleMouseLeave = endHold;

  // Mobile handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startHold(touch.clientX, touch.clientY);
  };
  const handleTouchEnd = endHold;

  return (
    <div
      style={{
        background: defaultColor,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Circle Reveal Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "url('/images/data-science-portfolio-nepal.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          clipPath: clip,
          transition: "clip-path 0.6s ease",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        {/* Preload hidden image for faster rendering */}
        <img
          src="/images/profile.webp"
          alt="Ram Shrestha Data Scientist Nepal"
          fetchpriority="high"
          style={{ display: "none" }}
        />
      </div>

      <BottomMenu />
      <Outlet />
    </div>
  );
};

export default App;