import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h2 className={styles.h2_heading}>about</h2>
          <div>
            <p className={styles.description}>
              I'm a Data Scientist passionate about turning data into actionable insights and intelligent solutions. I enjoy working at the intersection of data analysis, machine learning, and practical applications, creating models and dashboards that are not only accurate but also impactful and scalable.
            </p>
            <p className={styles.description}>
              Currently, I'm enhancing my skills in Python, statistics, and machine learning, building predictive models, and analyzing complex datasets to extract meaningful patterns. I also apply my background in software development to build data pipelines, automate workflows, and manage database-driven projects efficiently.
            </p>
            <p className={styles.description}>
              I've completed several personal projects that combine data collection, cleaning, analysis, and visualization, allowing me to explore concepts like feature engineering, model optimization, and data storytelling. My experience with programming and design strengthens both my technical skills and attention to detail.
            </p>
            <p className={styles.description}>
              In my spare time, I enjoy exploring data science trends, reading about AI and analytics, building small ML projects, and occasionally taking breaks with some light gaming adventures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
