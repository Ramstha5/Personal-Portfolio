import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BottomMenu from "./components/BottomMenu";
import "./App.css";

const App = () => {
  const [clip, setClip] = useState("circle(0px at 50% 50%)");
  const timeoutRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ["#00f2fe", "#4facfe", "#667eea", "#764ba2"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        straight: false,
        outModes: "out",
        bounce: false,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#00f2fe",
        opacity: 0.3,
        width: 1,
      },
    },
    detectRetina: true,
  };

  // Circle reveal handlers (kept)
  const startHold = (x, y) => {
    timeoutRef.current = setTimeout(() => {
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      setClip(`circle(${diagonal}px at ${x}px ${y}px)`);
    }, 600);
  };

  const endHold = () => {
    clearTimeout(timeoutRef.current);
    setClip("circle(0px at 50% 50%)");
  };

  const handleMouseDown = (e) => startHold(e.clientX, e.clientY);
  const handleMouseUp = endHold;
  const handleMouseLeave = endHold;
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startHold(touch.clientX, touch.clientY);
  };
  const handleTouchEnd = endHold;

  return (
    <div
      style={{
        background: "var(--bg-primary)",
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
      {/* Matt Dancho-style Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      />

      {/* Circle Reveal Overlay (kept for interactivity) */}
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
          zIndex: 9998,
        }}
      >
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