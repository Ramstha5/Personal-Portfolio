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
            I am <strong>Ram Shrestha</strong>, a BCA student and aspiring 
            <strong> Data Scientist based in Kathmandu, Nepal</strong>. I am passionate about using data, 
            machine learning, and AI to solve real-world problems and support data-driven decision making.
          </p>

          <p className={styles.description}>
            My work focuses on data analysis, data cleaning, and building machine learning models using Python. 
            I enjoy exploring patterns in data and turning them into meaningful insights that can help in business and technology.
          </p>

          <p className={styles.description}>
            I have hands-on experience with Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn. 
            I also practice building end-to-end data science projects, from data preprocessing to model evaluation.
          </p>

          <p className={styles.description}>
            I am continuously learning advanced topics such as Machine Learning, Deep Learning, and Natural Language Processing, 
            with the goal of becoming a skilled Data Scientist or Machine Learning Engineer in the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;