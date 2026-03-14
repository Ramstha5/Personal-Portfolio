
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Projects.module.css";

const ProjectItem = ({ ProItem }) => {
  return (
    <div className={`${styles.projects_card} mt-3`}>
      <div className="row d-flex flex-wrap">
        <div className={`col-md-4 ${styles.project_img}`}>
          <div className={styles.project_image}>
            <img src={ProItem.project_image} alt={ProItem.title} />
          </div>
        </div>
        <div className="col-md-8 project-content">
          <div className={styles.project_body}>
            <h3>
              <span className={styles.title}>{ProItem.title}</span>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>
            </h3>
            <p className={styles.description}>{ProItem.description}</p>
            <ul className={styles.language}>
              {ProItem.language?.language_name?.map((language) => (
                <li key={language} className={styles.language_name}>
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
