import React from "react";
import styles from "./Name.module.css";

const Name = () => {
  return (
    <>
      <div className="container">
        <div className={styles.name_wrap}>
          <h1 className={styles.name}>Ram Shrestha</h1>
          <h2>Aspiring Data Scientist | Data Analyst Learner</h2>
          <p className="short_des" style={{ color: "#95a3be" }}>
            I am a BCA student and a beginner in Data Science from Kathmandu,
            Nepal. I am currently learning Python, Data Analysis, Statistics,
            and Machine Learning. I enjoy working with data and building small
            projects to improve my skills and understanding of real-world
            problems.My goal is to become a professional Data Scientist by
            continuously learning, practicing, and building real projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Name;
