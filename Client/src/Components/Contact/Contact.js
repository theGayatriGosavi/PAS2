import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:abcd@gmail.com">
          abcd@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/">
          User Name: ABCD
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/">
          ABCD
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com//">
          @abcd
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+911234567890">
          +91 1234567890
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
