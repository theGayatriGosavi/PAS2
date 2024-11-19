import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPaw, FaPlusCircle } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div></div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="footer-link">
              <FaHome /> {/* Home Icon */}
            </Link>
          </li>
          <li>
            <Link to="/adoptpet" className="footer-link">
              <FaPaw /> {/* Paw Icon */}
            </Link>
          </li>
          <li>
            <Link to="/services" className="footer-link">
              <FaPlusCircle /> {/* Add Circle Icon */}
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background-color: #8e2020;
          color:#8e2020;
        }

        .navbar-links {
          display: flex;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .navbar-links li {
          margin: 0 1rem;
          
        }

        .footer-link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #f8f8f8;
          font-size: 1.5rem; /* Adjust the size of the icons */
          padding: 0.5rem;
          border: none; /* Remove border */
          background: #f8f8f8; /* Remove background */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
