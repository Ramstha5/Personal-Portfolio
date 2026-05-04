// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import styles from "./Projects.module.css";

// const ProjectItem = ({ ProItem }) => {

//   console.log(ProItem); // Debug: check data in browser console

//   return (
//     <div className={`${styles.projects_card} mt-3`}>
//       <div className="row d-flex flex-wrap">

//         {/* Project Image */}
//         <div className={`col-md-4 ${styles.project_img}`}>
//           <div className={styles.project_image}>
//             <img
//               src={ProItem?.project_image}
//               alt={ProItem?.title}
//             />
//           </div>
//         </div>

//         {/* Project Content */}
//         <div className="col-md-8 project-content">
//           <div className={styles.project_body}>

//             <h3>
//               <span className={styles.title}>{ProItem?.title}</span>
//               <span className={styles.arrow}>
//                 <FaArrowRight />
//               </span>
//             </h3>

//             <p className={styles.description}>
//               {ProItem?.description}
//             </p>

//             {/* Languages / Technologies */}
//             <ul className={styles.language}>
//               {Array.isArray(ProItem?.language_name) &&
//                 ProItem.language_name.map((lang, index) => (
//                   <li key={index} className={styles.language_name}>
//                     {lang}
//                   </li>
//                 ))}
//             </ul>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProjectItem;

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const ProjectItem = ({ ProItem }) => {
  return (
    <div className={`${styles.projects_card} mt-3`}>
      <div className="row d-flex flex-wrap">
        {/* Project Image */}
        <div className={`col-md-4 pe-0${styles.project_img}`}>
          <div className={styles.project_image}>
            <Link to={ProItem?.link} className={styles.title}>
              <img src={ProItem?.project_image} alt={ProItem?.title} />
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <div className="col-md-8 project-content">
          <div className={styles.project_body}>
            {/* Clickable Title */}
            <h3>
              <Link to={ProItem?.link} className={styles.title}>
                {ProItem?.title} <FaArrowRight className={styles.arrow} />
              </Link>
            </h3>

            <p className={styles.description}>{ProItem?.description}</p>

            {/* Languages / Technologies */}
            <ul className={styles.language}>
              {Array.isArray(ProItem?.language_name) &&
                ProItem.language_name.map((lang, index) => (
                  <li key={index} className={styles.language_name}>
                    {lang}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
