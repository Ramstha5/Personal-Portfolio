import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import BottomMenu from "./components/BottomMenu";
import "./App.css";

const App = () => {
  const [clip, setClip] = useState("circle(0px at 50% 50%)");
  const timeoutRef = useRef(null);

  // Optimized hold animation start
  const startHold = useCallback((x, y) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      setClip(`circle(${diagonal}px at ${x}px ${y}px)`);
    }, 600);
  }, []);

  // End hold animation
  const endHold = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setClip("circle(0px at 50% 50%)");
  }, []);

  // Event handlers with callbacks
  const handleMouseDown = useCallback((e) => startHold(e.clientX, e.clientY), [startHold]);
  const handleMouseUp = endHold;
  const handleMouseLeave = endHold;
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    startHold(touch.clientX, touch.clientY);
  }, [startHold]);
  const handleTouchEnd = endHold;

  return (
    <div 
      className="app-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Circle Reveal Overlay */}
      <div 
        className="reveal-overlay" 
        style={{ clipPath: clip }}
        role="img"
        aria-label="Interactive background reveal"
      >
        {/* Preload hidden image for faster rendering */}
        <img
          src="/images/profile.webp"
          alt="Ram Shrestha Data Scientist Nepal preload"
          fetchPriority="high"
          style={{ display: "none" }}
          aria-hidden="true"
        />
      </div>

      <BottomMenu />
      <Outlet />
    </div>
  );
};

export default App;
