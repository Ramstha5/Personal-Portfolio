import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { useSelector } from "react-redux";
import styles from "./Projects.module.css";
const Projects = () => {
  const ProItems = useSelector((store) => store.project);

  return (
    <>
      <section className={styles.projects} id="project">
        <div className="container">
          <h2 className={styles.h2_heading}>project</h2>
          {ProItems.slice(0, 5).map((ProItem) => (
            <ProjectItem key={ProItem.id} ProItem={ProItem} />
          ))}

          <div className="row mt-5">
            <div className="col-md-12">
              {/* <a href="/project-list" className={styles.project_link}>
                <span className={styles.project}>
                  View Full Project Archive
                </span>
                <span className={styles.arrow}>
                  <FaArrowRight />
                </span>
              </a> */}
              <a
                href="/project-list"
                target="blank"
                className={styles.project_link}
                rel="noopener noreferrer"
              >
                <span className={styles.project}>View Full Project Archive</span>
                <span className={styles.arrow}>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
