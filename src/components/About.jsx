
import React, { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  Code, 
  Database, 
  Brain, 
  BarChart3, 
  Server,
  Github,
  Twitter
} from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  const [skillPercents, setSkillPercents] = useState({
    python: 0, ml: 0, sql: 0, pandas: 0, aws: 0
  });
  const controls = useAnimation();
  const ref = useInView({ amount: 0.2 });

  const skills = [
    { name: "Python", percent: 95, icon: Code, color: "#ff6b6b" },
    { name: "Machine Learning", percent: 90, icon: Brain, color: "#4ecdc4" },
    { name: "SQL", percent: 85, icon: Database, color: "#45b7d1" },
    { name: "Pandas / NumPy", percent: 92, icon: BarChart3, color: "#f9ca24" },
    { name: "AWS / Cloud", percent: 80, icon: Server, color: "#6c5ce7" },
    { name: "Data Viz", percent: 88, icon: BarChart3, color: "#fdcb6e" }
  ];

  useEffect(() => {
    if (ref) {
      controls.start("animate");
      // Animate counters
      skills.forEach(skill => {
        setTimeout(() => {
          setSkillPercents(prev => ({
            ...prev,
            [skill.name.toLowerCase().replace(/ /g, "")]: skill.percent
          }));
        }, 300);
      });
    }
  }, [ref, controls, skills]);

  return (
    <section id="about" className="about" style={{ padding: "8rem 0" }}>
      <div className="container">
        <motion.h2 
          className={styles.section_title}
          initial={{ opacity: 0, y: 30 }}
          animate={controls.get()}
          variants={{
            hidden: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        <div className="grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="card"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={controls.get()}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 50 },
                  animate: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <Icon size={40} style={{ color: skill.color }} />
                  <div>
                    <h3 style={{ margin: 0, color: "var(--text-primary)" }}>{skill.name}</h3>
                  </div>
                </div>
                
                <div className={styles.progress_bar}>
                  <div 
                    className={styles.progress_fill}
                    style={{ 
                      width: `${skillPercents[skill.name.toLowerCase().replace(/ /g, "")]}%`,
                      background: `linear-gradient(90deg, ${skill.color}, var(--text-accent))`
                    }}
                  />
                </div>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                  {skillPercents[skill.name.toLowerCase().replace(/ /g, "")]}%
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="connect_cta"
          style={{ 
            textAlign: "center", 
            marginTop: "4rem",
            maxWidth: "36rem",
            margin: "4rem auto 0"
          }}
          initial={{ opacity: 0 }}
          animate={controls.get()}
          transition={{ delay: 0.8 }}
        >
          <h3 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>
            Let's connect and build something amazing together
          </h3>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/ramshrestha23" target="_blank" rel="noopener" style={{ 
              display: "flex", alignItems: "center", gap: "0.5rem", padding: "1rem 1.5rem",
              background: "var(--glass-bg)", borderRadius: "var(--radius)", border: "1px solid var(--glass-border)",
              color: "var(--text-primary)"
            }}>
              <Github size={20} /> GitHub
            </a>
            <a href="https://twitter.com/ramshrestha23" target="_blank" rel="noopener" style={{ 
              display: "flex", alignItems: "center", gap: "0.5rem", padding: "1rem 1.5rem",
              background: "var(--glass-bg)", borderRadius: "var(--radius)", border: "1px solid var(--glass-border)",
              color: "var(--text-primary)"
            }}>
              <Twitter size={20} /> Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
