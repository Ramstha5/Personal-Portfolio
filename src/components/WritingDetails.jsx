import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./WritingDetails.module.css";
import { fetchWriting } from "../store/writingSlice"; // make sure this exists

const BACKEND_URL = "https://beby.pythonanywhere.com/";

const WritingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const WrtItems = useSelector((store) => store.writing);
  const [loading, setLoading] = useState(true);

  // Fetch writing data if store is empty
  useEffect(() => {
    if (!WrtItems || WrtItems.length === 0) {
      dispatch(fetchWriting()).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, WrtItems]);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</h2>;
  }

  const writing = WrtItems.find((w) => w.id === parseInt(id));

  if (!writing) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Writing not found!
      </h2>
    );
  }

  const imageUrl = writing.writing_image.startsWith("http")
    ? writing.writing_image
    : `${BACKEND_URL}${writing.writing_image}`;

  return (
    <section className={styles.writingDetailsSection}>
      <div className="container">
        <Link to="/" className={styles.backButton}>
          <FaArrowLeft className={styles.arrow} /> Back to Writings
        </Link>

        <div className={styles.writingCard}>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className={styles.imageWrapper}>
                <img
                  src={imageUrl}
                  alt={writing.title}
                  className={styles.writingImage}
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <h2 className={styles.writingTitle}>{writing.title}</h2>
              <p className={styles.date}>{writing.date}</p>
              <p className={styles.writingDescription}>{writing.description}</p>

              {writing.tags && writing.tags.length > 0 && (
                <div className={styles.tagWrapper}>
                  {writing.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}

              {writing.link && (
                <a
                  href={writing.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMoreBtn}
                >
                  Read Full Article <FaArrowLeft className={styles.arrowRight} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingDetails;