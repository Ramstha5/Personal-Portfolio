import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Projects.module.css";
import { fetchProjects } from "../store/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const ProItems = useSelector((store) => store.project);

  useEffect(() => {
    dispatch(fetchProjects()); // Fetch data on mount
  }, [dispatch]);

  return (
    <>
      <section className={`${styles.projects} my-lg-5 my-md-4 my-sm-2 my-2`} id="project">
        <div className="container">
          <h2 className={styles.h2_heading}>project</h2>

          {ProItems.length === 0 ? (
            <p>Loading projects...</p> // Show loading message
          ) : (
            ProItems.slice(0, 5).map((ProItem) => (
              <ProjectItem key={ProItem.id} ProItem={ProItem} />
            ))
          )}

          <div className="row mt-5">
            <div className="col-md-12">
              <a
                href="/project-list"
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
