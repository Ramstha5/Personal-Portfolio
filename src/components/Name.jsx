import React from "react";
import styles from "./Name.module.css";

const Name = () => {
  return (
    <>
      <div className="container">
        <div className={styles.name_wrap}>
          <h1 className={styles.name}>Ram Shrestha - Data Scientist in Nepal</h1>
          <h2>Data Scientist</h2>
            <p className="short_des" style={{color:'#95a3be'}}>Hello! I am Ram Shrestha, a passionate Data Scientist from Nepal. I specialize in Machine Learning, Python, and Data Analytics. I create projects that solve real-world problems with data.</p>
            
        </div>
      </div>
    </>
  );
};

export default Name;
