
// export default Projects;
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { useSelector, useDispatch } from "react-redux"; // import dispatch
import styles from "./Projects.module.css";
import { fetchProjects } from "../store/projectSlice"; // import thunk

const Projects = () => {
  const dispatch = useDispatch();
  const ProItems = useSelector((store) => store.project);

  useEffect(() => {
    dispatch(fetchProjects()); // Fetch data on mount
  }, [dispatch]);

  return (
    <>
      <section className={styles.projects} id="projects" style={{ padding: "8rem 0" }}>
        <div className="container">
          <h2 style={{ 
            fontSize: "clamp(2rem, 6vw, 3.5rem)", 
            textAlign: "center", 
            marginBottom: "4rem",
            textTransform: "uppercase"
          }}>Featured Projects</h2>

          <div className="grid">
            {ProItems.length === 0 ? (
              <p>Loading projects...</p>
            ) : (
              ProItems.slice(0, 5).map((ProItem) => (
                <div key={ProItem.id} className="card">
                  <ProjectItem ProItem={ProItem} />
                </div>
              ))
            )}
          </div>

          <div style={{ 
            textAlign: "center", 
            marginTop: "4rem" 
          }}>
            <a
              href="/project-list"
              style={{
                display: "inline-flex", 
                alignItems: "center", 
                gap: "0.5rem",
                background: "var(--accent-gradient)",
                padding: "1rem 2rem",
                borderRadius: "var(--radius)",
                color: "var(--text-primary)",
                fontWeight: 600,
                textDecoration: "none"
              }}
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
