import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./BottomMenu.module.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const BottomMenu = () => {
  BottomMenu.propTypes = {};
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      const glow = glowRef.current;
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <>
      <div className={styles.cursorWrapper}>
        <div ref={glowRef} className={styles.cursorGlow}>
          <div className={styles.innerDot}></div>
        </div>
      </div>
    </>
  );
};

export default BottomMenu;
