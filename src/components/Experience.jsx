

import React, { useEffect } from "react";
import styles from "./Experience.module.css";
import { FaArrowRight } from "react-icons/fa";
import ExperienceItem from "./ExperienceItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperience } from "../store/experienceSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const ExpItems = useSelector((store) => store.experience);

  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);

  return (
    <section className={styles.experience} id="experience">
      <div className="container">
        <h2 className={styles.h2_heading}>Experience</h2>

        {ExpItems.length === 0 ? (
          <p>Loading experience...</p>
        ) : (
          ExpItems.slice(0, 5).map((ExpItem) => (
            <ExperienceItem key={ExpItem.id} ExpItem={ExpItem} />
          ))
        )}

        <div className="row mt-5">
          <div className="col-md-12">
            <a
              href="images/resume.pdf"
              className={styles.resume_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.resume}>View Full Résumé</span>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;