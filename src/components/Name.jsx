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
            Hello! I am Ram Shrestha, a Data Scientist and AI Engineer in
            Kathmandu, Nepal. I specialize in Python, Machine Learning, AI, and
            Data Analytics, creating projects that solve real-world problems
            with data.
          </p>
        </div>
      </div>
    </>
  );
};

export default Name;
