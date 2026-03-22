import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./AllProject.module.css";

const AllProjectItem = ({ item }) => {
  return (
    <div className={`row py-4 ${styles.bdr}`}>
      {/* Year */}
      <div className={`col-lg-1 col-md-2 col-2 ${styles.years}`}>
        {item.year}
      </div>

      {/* Project Title - clickable */}
      <div className={`col-lg-3 col-md-6 col-10 ${styles.titles}`}>
        <Link to={`/project/${item.id}`} className={styles.projectLink}>
          {item.title}
        </Link>
      </div>

      {/* Made at */}
      <div className={`col-lg-2 d-none d-lg-block ${styles.mades}`}>
        {item.made}
      </div>

      {/* Languages / Technologies */}
      <div className={`col-lg-4 d-none d-lg-block ${styles.languagess}`}>
        <ul className={styles.language}>
          {item.language_name?.map((language) => (
            <li key={language} className={styles.language_name}>
              {language}
            </li>
          ))}
        </ul>
      </div>

      {/* Link section - navigate within app */}
      <div className={`col-lg-2 col-md-4 col-4 ${styles.links}`}>
        <Link to={`/project/${item.id}`} className={styles.projectLink}>
          <span>View Project</span>
          <span className={styles.link_arrow}>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AllProjectItem;