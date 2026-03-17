// SpinnerImage.jsx
import React from "react";
import styles from "./SpinnerImage.module.css";
import { Link } from "react-router-dom";

const SpinnerImage = () => {
  // Add descriptive names for each project/image
  const offcanvasImage = [
    { id: 1, image: "/images/project1.webp", name: "Machine Learning Project" },
    { id: 2, image: "/images/project1.webp", name: "Python Data Analysis Project" },
    { id: 3, image: "/images/project1.webp", name: "AI Research Project" },
    { id: 4, image: "/images/project1.webp", name: "Computer Vision Demo" },
  ];

  return (
    <>
      {/* Spinner Button */}
      <div className={styles.spinner_image}>
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
          aria-label="Open old projects gallery"
        >
          <img src="/images/rotate.gif" alt="Loading Ram Shrestha Portfolio" />
        </button>
      </div>

      {/* Offcanvas Bottom Section */}
      <div
        className={`offcanvas offcanvas-bottom bg-transparent ${styles.customOffcanvas}`}
        tabIndex={-1}
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header p-0">
          <button
            type="button"
            className="btn-close cross-cancel"
            data-bs-dismiss="offcanvas"
            aria-label="Close gallery"
          />
        </div>
        <div className="offcanvas-body p-0">
          <section className={styles.hero}>
            <div className={styles.ellipse}></div>
            <div className={styles.ellipse}></div>
            <div className={styles.ellipse}></div>
            <div className={styles.ellipse}></div>

            <div className="content">
              <h1 className={styles.name}>
                Looking for a different site? Go back in time...
              </h1>

              <div className="row d-flex justify-content-center">
                <div className="col-md-4 col-lg-5 col-sm-5 col-5">
                  <div className="card-wrapper">
                    <div className="row">
                      {offcanvasImage.map((item) => (
                        <div
                          key={item.id}
                          className={`col-lg-6 col-md-6 col-sm-12 p-1 ${styles.img_wrapper}`}
                        >
                          <Link to="/">
                            <div className={`${styles.offcanvas_card} card`}>
                              <img
                                src={item.image}
                                alt={`Ram Shrestha - ${item.name}`}
                                loading="lazy"
                              />
                            </div>
                          </Link>
                          <p className={styles.v}>v{item.id}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SpinnerImage;