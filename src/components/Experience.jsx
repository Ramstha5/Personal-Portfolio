

import React, { useEffect } from "react";
import styles from "./Experience.module.css";
import { FaArrowRight } from "react-icons/fa";
import ExperienceItem from "./ExperienceItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperience } from "../store/experienceSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const ExpItems = useSelector((store) => store.experience);

  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);

  return (
<section className={styles.experience} id="experience" style={{ padding: "8rem 0" }}>
      <div className="container">
        <h2 style={{ 
          fontSize: "clamp(2rem, 6vw, 3.5rem)", 
          textAlign: "center", 
          marginBottom: "4rem",
          textTransform: "uppercase"
        }}>Experience</h2>

        <div className="grid">
          {ExpItems.length === 0 ? (
            <p>Loading experience...</p>
          ) : (
            ExpItems.slice(0, 5).map((ExpItem) => (
              <div key={ExpItem.id} className="card" style={{ padding: "2rem" }}>
                <ExperienceItem ExpItem={ExpItem} />
              </div>
            ))
          )}
        </div>

        <div style={{ 
          textAlign: "center", 
          marginTop: "4rem" 
        }}>
          <a
            href="/images/resume.pdf"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.5rem",
              background: "var(--glass-bg)",
              backdropFilter: "var(--glass-blur)",
              border: "1px solid var(--glass-border)",
              padding: "1rem 2rem",
              borderRadius: "var(--radius)",
              color: "var(--text-primary)",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            View Full Résumé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;