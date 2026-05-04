import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const sectionsIds = ["about", "experience", "project"];

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

  return (
    <nav className={styles.nav}>
      <ul>
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
    </nav>
  );
};

export default Navbar;
