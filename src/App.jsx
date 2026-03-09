// // import "bootstrap/dist/css/bootstrap.min.css";
// // import React from "react";
// // import { Outlet } from "react-router-dom";
// // import BottomMenu from "./components/BottomMenu";
// // import "./App.css";

// // const App = () => {
// //   return (
// //     <>
// //       <BottomMenu />
// //       <Outlet />
// //     </>
// //   );
// // };

// // export default App;


// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useRef } from "react";
// import { Outlet } from "react-router-dom";
// import BottomMenu from "./components/BottomMenu";
// import "./App.css";

// const App = () => {
//   const defaultColor = "#1e293b";
//   const [clip, setClip] = useState("circle(0px at 50% 50%)");
//   const timeoutRef = useRef(null);

//   const startHold = (x, y) => {
//     // delay before showing circle (press a bit long)
//     timeoutRef.current = setTimeout(() => {
//       // large enough circle to cover full screen
//       const diagonal = Math.sqrt(window.innerWidth**2 + window.innerHeight**2);
//       setClip(`circle(${diagonal}px at ${x}px ${y}px)`);
//     }, 600); // 400ms hold delay
//   };

//   const endHold = () => {
//     clearTimeout(timeoutRef.current);
//     setClip("circle(0px at 50% 50%)");
//   };

//   // Desktop
//   const handleMouseDown = (e) => startHold(e.clientX, e.clientY);
//   const handleMouseUp = () => endHold();
//   const handleMouseLeave = () => endHold();

//   // Mobile
//   const handleTouchStart = (e) => {
//     const touch = e.touches[0];
//     startHold(touch.clientX, touch.clientY);
//   };
//   const handleTouchEnd = () => endHold();

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
//       onMouseLeave={handleMouseLeave}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Circle Image Overlay */}
//     <div
//   style={{
//     position: "fixed",
//     inset: 0,
//     backgroundImage: "url('/images/profile.jpeg')",
//     backgroundSize: "cover",
//     backgroundPosition: "top",
//     clipPath: clip,
//     transition: "clip-path 0.6s ease",
//     pointerEvents: "none",
//     zIndex: 9999,
//   }}
// >
//   {/* React मा 'fetchPriority' (P ठुलो) लेख्नुपर्छ */}
//   <img 
//     src="/images/profile.jpeg" 
//     fetchPriority="high" 
//     style={{ display: 'none' }} 
//     alt="" 
//     aria-hidden="true" // Screen readers का लागि लुकाउन
//     loading="lazy"
//   />
// </div>

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
    // ४००ms वा ६००ms होल्ड गरेपछि मात्र एनिमेसन सुरु हुने
    timeoutRef.current = setTimeout(() => {
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      setClip(`circle(${diagonal}px at ${x}px ${y}px)`);
    }, 600); 
  };

  const endHold = () => {
    clearTimeout(timeoutRef.current);
    setClip("circle(0px at 50% 50%)");
  };

  // Desktop events
  const handleMouseDown = (e) => startHold(e.clientX, e.clientY);
  const handleMouseUp = () => endHold();
  const handleMouseLeave = () => endHold();

  // Mobile events
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
          backgroundImage: "url('/images/profile.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          clipPath: clip,
          transition: "clip-path 0.6s ease",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        {/* यहाँ 'loading="lazy"' हटाइएको छ ताकि यो फोटो तुरुन्तै लोड होस् */}
        <img 
          src="/images/profile.jpeg" 
          fetchPriority="high" 
          style={{ display: 'none' }} 
          alt="" 
          aria-hidden="true" 
        />
      </div>

      <BottomMenu />
      <Outlet />
    </div>
  );
};

export default App;