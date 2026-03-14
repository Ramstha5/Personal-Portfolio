
import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./AllProject.module.css";
import { useSelector, useDispatch } from "react-redux";
import AllProjectItem from "./AllProjectItem";
import { Link } from "react-router-dom";
import { fetchProjects } from "../store/projectSlice";

const AllProject = () => {
  const dispatch = useDispatch();
  const ProItems = useSelector((store) => store.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <section className={styles.all_projects}>
          <Link to="/" className={styles.back_link}>
            <span className={styles.arrow}>
              <FaArrowLeft />
            </span>
            <span className={styles.name}>Ram Shrestha</span>
          </Link>

          <h1 className={styles.h1}>All Projects</h1>

          <div className={`row py-4 ${styles.thead}`}>
            <div className={`col-lg-1 col-md-2 col-sm-2 col-2 ${styles.year}`}>
              <span>Year</span>
            </div>

            <div className={`col-lg-3 col-md-6 col-sm-6 col-10 ${styles.title}`}>
              <span>Project</span>
            </div>

            <div className={`col-lg-2 d-none d-lg-block ${styles.made}`}>
              <span>Made at</span>
            </div>

            <div className={`col-lg-4 d-none d-lg-block ${styles.languages}`}>
              <span>Built with</span>
            </div>

            <div className={`col-lg-2 col-md-4 col-sm-4 d-none d-md-block ${styles.link}`}>
              <span>Link</span>
            </div>
          </div>

          {ProItems.length === 0 ? (
            <p>Loading projects...</p>
          ) : (
            ProItems.map((item) => (
              <AllProjectItem key={item.id} item={item} />
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default AllProject;