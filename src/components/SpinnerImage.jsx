// SpinnerImage.jsx
import React, { useEffect } from "react";
import styles from "./SpinnerImage.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../store/projectSlice";

const SpinnerImage = () => {
  const dispatch = useDispatch();

  // Get projects from redux store
  const offcanvasImage = useSelector((store) => store.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

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
          <img
            src="/images/data-science-portfolio-nepal-spinner.gif"
            alt="Loading Ram Shrestha Portfolio"
          />
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
                <div className="col-md-4 col-lg-5 col-sm-8 col-10">
                  <div className="card-wrapper">
                    <div className="row">
                      {offcanvasImage.length === 0 ? (
                        <p className="text-white text-center">
                          Loading projects...
                        </p>
                      ) : (
                        offcanvasImage.slice(0, 4).map((item) => (
                          <div
                            key={item.id}
                            className={`col-lg-6 col-md-6 col-sm-6 col-6 p-1 ${styles.img_wrapper}`}
                          >
                            
                            <Link to={`/project/${item.id}`}  >
                              <div
                                className={`${styles.offcanvas_card} card`}
                              >
                                <img
                                  src={item.project_image}
                                  alt={`Ram Shrestha - ${item?.title}`}
                                  loading="lazy"
                                />
                              </div>
                            </Link>

                            <p className={styles.v}>
                              {item.name || `v${item.id}`}
                            </p>
                          </div>
                        ))
                      )}
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