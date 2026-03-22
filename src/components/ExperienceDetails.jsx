import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperience } from "../store/experienceSlice";
import styles from "./ExperienceDetails.module.css";
import { FaArrowLeft } from "react-icons/fa";


const ExperienceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ExpItems = useSelector((store) => store.experience);

  const [experience, setExperience] = useState(null);

  useEffect(() => {
    // If store empty → fetch data
    if (ExpItems.length === 0) {
      dispatch(fetchExperience());
    } else {
      const exp = ExpItems.find((e) => e.id === parseInt(id));
      setExperience(exp);
    }
  }, [ExpItems, dispatch, id]);

  // After data loads
  useEffect(() => {
    if (ExpItems.length > 0 && !experience) {
      const exp = ExpItems.find((e) => e.id === parseInt(id));
      setExperience(exp);
    }
  }, [ExpItems, id, experience]);

  if (!experience) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Loading experience...
      </h2>
    );
  }

  return (
    <section className={styles.experienceDetailsSection}>
      <div className="container">
        <Link to="/" className={styles.backButton}>
          <FaArrowLeft className={styles.arrow} />
          Back to Experience
        </Link>

        <div className={styles.experienceCard}>
          <div className="col-md-3">
            <span className={styles.date}>{experience.date}</span>
          </div>

          <div className="col-md-9">
            <h2 className={styles.position}>{experience.position}</h2>
            <h3 className={styles.projectName}>{experience.project_name}</h3>

            <p className={styles.description}>{experience.description}</p>

            <h4 className={styles.techHeading}>Technologies:</h4>
            <ul className={styles.techList}>
              {experience.language_name?.map((lang, i) => (
                <li key={i} className={styles.techItem}>
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

export default ExperienceDetails;
