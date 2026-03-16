// SpinnerImage.jsx
import React from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./SpinnerImage.module.css";
import { Link } from "react-router-dom";
import rotateGif from "../images/rotate.gif";


const SpinnerImage = () => {
  const offcanvasImage = [
    {
      id:1,
      image: "images/project1.webp",
    },
    {
      id:2,
      image: "images/project1.webp",
    },
    {
      id:3,
      image: "images/project1.webp",
    },
    {
      id:4,
      image: "images/project1.webp",
    },
  ];


  return (
    <>
      <div className={styles.spinner_image}>
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
         <img src={rotateGif} alt="Loading..." />
        </button>
      </div>

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
            aria-label="Close"
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
                          <div className={`${styles.offcanvas_card} card `} >
                              <img src={item.image} alt="Old site 1" />
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
