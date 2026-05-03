import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import styles from "./Name.module.css";
import { ArrowRight, Download } from "lucide-react";

const Name = () => {
  const typedStrings = [
    "AI Engineer Kathmandu",
    "Data Scientist Nepal", 
    "Machine Learning Expert",
    "Python Developer"
  ];

  return (
    <section className="hero" style={{ padding: "8rem 0", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <motion.div 
          className={`card ${styles.hero_card}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.name_wrap}>
            <motion.h1 
              className={styles.name}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Ram Shrestha
            </motion.h1>
            
            <motion.h2 className={styles.subtitle}>
              I'm a <Typed
                strings={typedStrings}
                typeSpeed={60}
                backSpeed={40}
                backDelay={2000}
                loop
                cursorChar="█"
                className={styles.typed_text}
              />
            </motion.h2>

            <motion.p 
              className="hero_bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ maxWidth: "32rem", lineHeight: 1.8 }}
            >
              Building intelligent systems with data. Specializing in Machine Learning, 
              AI, and Data Analytics to solve real-world problems.
            </motion.p>

            <motion.div 
              className="hero_cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <a href="#projects" className="btn btn-primary" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--accent-gradient)", padding: "1rem 2rem", 
                borderRadius: "var(--radius)", fontWeight: 600, marginRight: "1rem"
              }}>
                View Projects <ArrowRight size={20} />
              </a>
              <a href="/images/resume.pdf" download className="btn btn-secondary" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--glass-bg)", backdropFilter: "var(--glass-blur)",
                border: "1px solid var(--glass-border)", padding: "1rem 2rem", 
                borderRadius: "var(--radius)", color: "var(--text-primary)"
              }}>
                Download CV <Download size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Name;
