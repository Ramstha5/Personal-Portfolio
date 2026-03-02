import React from "react";
import styles from "./Name.module.css";

const Name = () => {
  return (
    <>
      <div className="container">
        <div className={styles.name_wrap}>
          <h1 className={styles.name}>Ram Shrestha - Data Scientist in Nepal</h1>
          <h2>Data Scientist</h2>
          <p className={styles.des}>
            I build data-driven solutions that transform raw data into meaningful insights and intelligent decisions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Name;
