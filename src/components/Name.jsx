import React from "react";
import styles from "./Name.module.css";

const Name = () => {
  return (
    <>
      <div className="container">
        <div className={styles.name_wrap}>
          <h1 className={styles.name}>
            Ram Shrestha - Data Scientist in Nepal
          </h1>
          <h2>AI Engineer Kathmandu</h2>
          <p className="short_des" style={{ color: "#95a3be" }}>
            Hello! I'm Ram Shrestha, a BCA student and aspiring Data Scientist from Kathmandu, Nepal.  
            I specialize in Python, Machine Learning, and Data Analytics, and I enjoy building projects 
            that turn raw data into meaningful insights and real-world solutions.  
            I am continuously improving my skills in AI, Deep Learning, and Data Science to become a 
            professional Machine Learning Engineer.
          </p>
        </div>
      </div>
    </>
  );
};

export default Name;
