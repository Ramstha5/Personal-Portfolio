import React from 'react'
import styles from "./Contact.module.css";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <div className="container">
         <div className="row p-lg-3 p-2 px-md-5 pt-md-4 px-sm-4 px-2 ">
            <div className="col-lg-5">
               <div className="contact_img">
                  <img src="./images/data-science-portfolio-nepal.webp" alt="data-science-portfolio-nepal" />
               </div>
            </div>
            <div className="col-lg-7">
               <div className={styles.contact_info}>
                  <h4>Phone Number</h4>
                  <span className='text-white'>9800000000</span>
                  <h4>Email</h4>
                 <a href="mailto:shrestha23ram@gmail.com" className={`${styles.mail} text-white text-decoration-underline`}>
                  <span>shrestha23ram@gmail.com</span>
                  </a>
                  <h4>Address</h4>
                  <span className='text-white'>Kathmandu,Nepal</span>
                  <br />
                  <br />
                  <a href="mailto:shrestha23ram@gmail.com" alt='send message ' className={`${styles["contact_btn"]}`}>
                     <IoMdMail />
                     <span>Send Message</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Contact