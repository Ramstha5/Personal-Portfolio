// import React from 'react'
// import styles from "./Experience.module.css";
// import { FaArrowRight } from "react-icons/fa";

// const ExperienceItem = ({ExpItem}) => {
//   return (
//     <>
//       <div className={`${styles.experience_card} mt-3`}>
//         <div className="row">
//           <div className="col-md-3 p-0">
//             <span className={styles.date}>{ExpItem.date}</span>
//           </div>
//           <div className="col-md-9 p-0">
//             <h3>
//               <span className={styles.working_position}>
//                 {ExpItem.position}
//               </span>
//               <span className={styles.project_name}>
//                 {ExpItem.project_name}
//               </span>
//               <span className={styles.arrow}>
//                 <FaArrowRight />
//               </span>
//             </h3>
//             <p className={styles.project_description}>{ExpItem.description}</p>
//             <ul className={styles.language}>
//               {ExpItem.language.language_name.map((language) => (
//                 <li key={language} className={styles.language_name}>
//                   {language}
//                 </li>
//               ))}

//               {/* <li className={styles.language_name}>react</li>
//               <li className={styles.language_name}>html</li>
//               <li className={styles.language_name}>bootstrap</li> */}
//             </ul>
           
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ExperienceItem


import React from 'react';
import styles from "./Experience.module.css";
import { FaArrowRight } from "react-icons/fa";

const ExperienceItem = ({ ExpItem }) => {
  return (
    <div className={`${styles.experience_card} mt-3`}>
      <div className="row">
        <div className="col-md-3 p-0">
          <span className={styles.date}>{ExpItem.date}</span>
        </div>

        <div className="col-md-9 p-0">
          <h3>
            <span className={styles.working_position}>
              {ExpItem.position}
            </span>
            <span className={styles.project_name}>
              {ExpItem.project_name}
            </span>
            <span className={styles.arrow}>
              <FaArrowRight />
            </span>
          </h3>

          <p className={styles.project_description}>{ExpItem.description}</p>

          <ul className={styles.language}>
            {ExpItem.language_name?.map((language) => (
              <li key={language} className={styles.language_name}>
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;