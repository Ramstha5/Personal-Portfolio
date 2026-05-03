import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ padding: "8rem 0 4rem", textAlign: "center" }}>
      <div className="container">
        <motion.div 
          className="card"
          style={{ 
            maxWidth: "48rem", 
            margin: "0 auto",
            padding: "3rem" 
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ 
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)", 
            marginBottom: "2rem",
            color: "var(--text-primary)"
          }}>
            Get In Touch
          </h2>
          
          <p style={{ 
            color: "var(--text-secondary)", 
            fontSize: "1.125rem", 
            lineHeight: 1.7,
            marginBottom: "3rem"
          }}>
            I'm always interested in new opportunities and exciting collaborations. 
            Feel free to reach out via email or social media.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:hello@ramshrestha.com.np" style={{
              padding: "1rem 2rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "var(--radius)",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 500
            }}>
              hello@ramshrestha.com.np
            </a>
          </div>

          <div style={{ 
            marginTop: "4rem", 
            paddingTop: "3rem", 
            borderTop: "1px solid var(--glass-border)",
            fontSize: "0.875rem",
            color: "var(--text-secondary)"
          }}>
            <p>© 2024 Ram Shrestha. Built with React & love in Kathmandu. 🚀</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
