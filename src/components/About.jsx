import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className={styles.h2_heading}>About</h2>
        <div>
          <p className={styles.description}>
            I am <strong>Ram Shrestha</strong>, a BCA student and a beginner in 
            <strong> Data Science based in Kathmandu, Nepal</strong>. I am passionate about learning
            how data, machine learning, and AI can be used to solve real-world problems and support
            data-driven decision making.
          </p>

          <p className={styles.description}>
            My learning focuses on data analysis, data cleaning, and building basic machine learning models using Python. 
            I enjoy exploring patterns in data and understanding how raw data can be converted into useful insights.
          </p>

          <p className={styles.description}>
            I have hands-on practice with Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn. 
            I am currently working on small projects to improve my understanding of data preprocessing, visualization, and model building.
          </p>

          <p className={styles.description}>
            I am continuously improving my skills in Machine Learning, Deep Learning, and Natural Language Processing, 
            with the goal of becoming a skilled and job-ready Data Scientist or Machine Learning Engineer in the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;