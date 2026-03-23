import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../store/projectSlice";
import styles from "./ProjectDetails.module.css";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ProItems = useSelector((store) => store.project);
  const [project, setProject] = useState(null);

  useEffect(() => {
    // If Redux already has data, find project
    if (ProItems.length > 0) {
      const proj = ProItems.find((p) => p.id === parseInt(id));
      setProject(proj);
    } else {
      // If Redux is empty (page reload), fetch projects first
      dispatch(fetchProjects());
    }
  }, [ProItems, id, dispatch]);

  // Watch Redux updates
  useEffect(() => {
    if (ProItems.length > 0 && !project) {
      const proj = ProItems.find((p) => p.id === parseInt(id));
      setProject(proj);
    }
  }, [ProItems, id, project]);

  if (!project)
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Loading project...
      </h2>
    );

  return (
    <section className={styles.projectDetailsSection}>
      <div className="container">
        <Link to="/" className={styles.backButton}>
          <FaArrowLeft className={styles.arrow} />
          Back to Projects
        </Link>

        <div className={styles.projectCard}>
          <div className="col-md-5 p-3 w-100" style={{ padding: 0 }}>
            <img
              src={project.project_image}
              alt={project.title}
              className={styles.projectImage}
            />
          </div>

          <div className={`col-md-7 ${styles.projectContent}`}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>

            <h4 className={styles.techHeading}>Technologies Used:</h4>
            <ul className={styles.techList}>
              {Array.isArray(project.language_name) &&
                project.language_name.map((lang, index) => (
                  <li key={index} className={styles.techItem}>
                    {lang}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
