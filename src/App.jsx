// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import { Outlet } from "react-router-dom";
// import BottomMenu from "./components/BottomMenu";
// import "./App.css";

// const App = () => {
//   return (
//     <>
//       <BottomMenu />
//       <Outlet />
//     </>
//   );
// };

// export default App;


// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import BottomMenu from "./components/BottomMenu";
// import "./App.css";

// const App = () => {
//   const defaultColor = "#1e293b"; // previous background color
//   const [clip, setClip] = useState("circle(0px at 50% 50%)");

//   const expandCircle = (x, y) => {
//     setClip(`circle(150% at ${x}px ${y}px)`);
//   };

//   const shrinkCircle = (x, y) => {
//     setClip(`circle(0px at ${x}px ${y}px)`);
//   };

//   const handleMouseDown = (e) => expandCircle(e.clientX, e.clientY);
//   const handleMouseUp = (e) => shrinkCircle(e.clientX, e.clientY);

//   const handleTouchStart = (e) => {
//     const touch = e.touches[0];
//     expandCircle(touch.clientX, touch.clientY);
//   };
//   const handleTouchEnd = () => setClip("circle(0px at 50% 50%)");

//   return (
//     <div
//       style={{
//         background: defaultColor,
//         minHeight: "100vh",
//         position: "relative",
//         overflow: "hidden",
//       }}
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Circle Image Overlay */}
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           clipPath: clip,
//           transition: "clip-path 0.6s ease",
//           pointerEvents: "none",
//           zIndex: 9999, // on top of everything
//         }}
//       />

//       <BottomMenu />
//       <Outlet />
//     </div>
//   );
// };

// export default App;


import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import BottomMenu from "./components/BottomMenu";
import "./App.css";

const App = () => {
  const defaultColor = "#1e293b";
  const [clip, setClip] = useState("circle(0px at 50% 50%)");
  const timeoutRef = useRef(null);

  const startHold = (x, y) => {
    // delay before showing circle (press a bit long)
    timeoutRef.current = setTimeout(() => {
      // large enough circle to cover full screen
      const diagonal = Math.sqrt(window.innerWidth**2 + window.innerHeight**2);
      setClip(`circle(${diagonal}px at ${x}px ${y}px)`);
    }, 400); // 400ms hold delay
  };

  const endHold = () => {
    clearTimeout(timeoutRef.current);
    setClip("circle(0px at 50% 50%)");
  };

  // Desktop
  const handleMouseDown = (e) => startHold(e.clientX, e.clientY);
  const handleMouseUp = () => endHold();
  const handleMouseLeave = () => endHold();

  // Mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startHold(touch.clientX, touch.clientY);
  };
  const handleTouchEnd = () => endHold();

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
      {/* Circle Image Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "url('/images/profile.JPG')",
          backgroundSize: "cover",   // full width & height
          backgroundPosition: "top",
          clipPath: clip,
          transition: "clip-path 0.6s ease",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      <BottomMenu />
      <Outlet />
    </div>
  );
};

export default App;