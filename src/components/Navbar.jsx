import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const sectionsIds = ["about", "experience", "projects", "writing"];

const Navbar = () => {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let current = "about"; // default
      sectionsIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (
            window.scrollY >= top - window.innerHeight / 2 &&
            window.scrollY < top + height - window.innerHeight / 2
          ) {
            current = id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <motion.nav 
      className={styles.nav}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Desktop Nav */}
      <ul className={styles.desktop_nav}>
        {sectionsIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.nav_link} ${
                activeId === id ? styles.active : ""
              }`}
              onClick={(e) => handleClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button 
        className={styles.mobile_toggle}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.ul 
          className={styles.mobile_menu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {sectionsIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.nav_link} ${styles.mobile_link}`}
                onClick={(e) => {
                  handleClick(e, id);
                  setIsMobileOpen(false);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
