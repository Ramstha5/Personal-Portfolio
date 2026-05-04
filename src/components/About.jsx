
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
            I am <strong>Ram Shrestha</strong>, a <strong>Data Scientist based in Kathmandu, Nepal</strong>, 
            passionate about transforming raw data into actionable insights and intelligent solutions. 
            I specialize in Python, Machine Learning, Data Analysis, and Artificial Intelligence.
          </p>

          <p className={styles.description}>
            My expertise includes data cleaning, feature engineering, predictive modeling, 
            and data visualization. I build scalable machine learning models and interactive dashboards 
            that help solve real-world business problems.
          </p>

          <p className={styles.description}>
            I have experience working with Python, SQL, Pandas, NumPy, Scikit-learn, and modern 
            data science tools. I also design efficient data pipelines and automate workflows 
            to improve productivity and performance.
          </p>

          <p className={styles.description}>
            As an aspiring AI and Machine Learning Engineer, I continuously explore new trends 
            in Deep Learning, NLP, and data-driven technologies to enhance my technical expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
