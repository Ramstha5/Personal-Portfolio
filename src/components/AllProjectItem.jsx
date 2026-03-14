
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./AllProject.module.css";

const AllProjectItem = ({ item }) => {
  return (
    <>
      <div className={`row py-4 ${styles.bdr}`}>
        <div className={`col-lg-1 col-md-2 col-2 ${styles.years}`}>
          {item.year}
        </div>

        <div className={`col-lg-3 col-md-6 col-10 ${styles.titles}`}>
          {item.title}
        </div>

        <div className={`col-lg-2 d-none d-lg-block ${styles.mades}`}>
          {item.made}
        </div>

        <div className={`col-lg-4 d-none d-lg-block ${styles.languagess}`}>
          <ul className={styles.language}>
            {item.language_name?.map((language) => (
              <li key={language} className={styles.language_name}>
                {language}
              </li>
            ))}
          </ul>
        </div>

        <div className={`col-lg-2 col-md-4 col-4 ${styles.links}`}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
          >
            <span>{item.link}</span>
            <span className={styles.link_arrow}>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default AllProjectItem;