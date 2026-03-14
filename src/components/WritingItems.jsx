
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Writing.module.css";

const BACKEND_URL = "https://beby.pythonanywhere.com/"; // only if path is relative

const WritingItems = ({ WrtItem }) => {
  // Use full URL only if it's relative
  const imageUrl = WrtItem.writing_image.startsWith("http")
    ? WrtItem.writing_image
    : `${BACKEND_URL}${WrtItem.writing_image}`;

  return (
    <>
      <div className={`${styles.writing_card} mt-3`}>
        <div className="row">
          <div className="col-3">
            <div className={styles.writing_image}>
              <img src={imageUrl} alt={WrtItem.title} />
            </div>
          </div>
          <div className="col-9">
            <div className={styles.writing_body}>
              <p className={styles.date}>{WrtItem.date}</p>
              <h3>
                <span className={styles.title}>{WrtItem.title}</span>
                <span className={styles.arrow}>
                  <FaArrowRight />
                </span>
              </h3>
              <p className={styles.description}>{WrtItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritingItems;
