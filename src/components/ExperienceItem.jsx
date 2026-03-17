// // import React from 'react'
// // import styles from "./Experience.module.css";
// // import { FaArrowRight } from "react-icons/fa";

// // const ExperienceItem = ({ExpItem}) => {
// //   return (
// //     <>
// //       <div className={`${styles.experience_card} mt-3`}>
// //         <div className="row">
// //           <div className="col-md-3 p-0">
// //             <span className={styles.date}>{ExpItem.date}</span>
// //           </div>
// //           <div className="col-md-9 p-0">
// //             <h3>
// //               <span className={styles.working_position}>
// //                 {ExpItem.position}
// //               </span>
// //               <span className={styles.project_name}>
// //                 {ExpItem.project_name}
// //               </span>
// //               <span className={styles.arrow}>
// //                 <FaArrowRight />
// //               </span>
// //             </h3>
// //             <p className={styles.project_description}>{ExpItem.description}</p>
// //             <ul className={styles.language}>
// //               {ExpItem.language.language_name.map((language) => (
// //                 <li key={language} className={styles.language_name}>
// //                   {language}
// //                 </li>
// //               ))}

// //               {/* <li className={styles.language_name}>react</li>
// //               <li className={styles.language_name}>html</li>
// //               <li className={styles.language_name}>bootstrap</li> */}
// //             </ul>
           
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ExperienceItem


// import React from 'react';
// import styles from "./Experience.module.css";
// import { FaArrowRight } from "react-icons/fa";

// const ExperienceItem = ({ ExpItem }) => {
//   return (
//     <div className={`${styles.experience_card} mt-3`}>
//       <div className="row">
//         <div className="col-md-3 p-0">
//           <span className={styles.date}>{ExpItem.date}</span>
//         </div>

//         <div className="col-md-9 p-0">
//           <h3>
//             <span className={styles.working_position}>
//               {ExpItem.position}
//             </span>
//             <span className={styles.project_name}>
//               {ExpItem.project_name}
//             </span>
//             <span className={styles.arrow}>
//               <FaArrowRight />
//             </span>
//           </h3>

//           <p className={styles.project_description}>{ExpItem.description}</p>

//           <ul className={styles.language}>
//             {ExpItem.language_name?.map((language) => (
//               <li key={language} className={styles.language_name}>
//                 {language}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceItem;


import React, { useState } from 'react';
import styles from "./Experience.module.css";
import { FaArrowRight } from "react-icons/fa";

const ExperienceItem = ({ ExpItem }) => {
  const [showMore, setShowMore] = useState(false);
  const MAX_LENGTH = 300; // characters to show initially

  const toggleShowMore = () => setShowMore(!showMore);

  const shortDescription =
    ExpItem.description.length > MAX_LENGTH
      ? ExpItem.description.substring(0, MAX_LENGTH) + "..."
      : ExpItem.description;

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

          <p className={styles.project_description}>
            {showMore ? ExpItem.description : shortDescription}
            {ExpItem.description.length > MAX_LENGTH && (
              <span
                onClick={toggleShowMore}
                style={{
                  color: "#00ffff",
                  cursor: "pointer",
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {showMore ? "Show Less" : "Show More"}
              </span>
            )}
          </p>

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