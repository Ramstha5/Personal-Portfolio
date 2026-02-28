import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import styles from "./SocialMedia.module.css";
const SocialMedia = () => {
  return (
    <>
      <div className="container">
        <ul className={styles.social_media}>
          <li>
            <a
              href="https://github.com/Ramstha5?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.social_icon}>
                <FaGithub />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ram-shrestha-43a93727b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.social_icon}>
                <IoLogoLinkedin />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/chrestharam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.social_icon}>
                <FaFacebookSquare />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/chrestharam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.social_icon}>
                <FaInstagramSquare />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialMedia;
