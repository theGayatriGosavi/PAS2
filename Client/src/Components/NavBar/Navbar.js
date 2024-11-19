import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Import profile icon

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="/admin" className="navbar-icon-link">
          <FaUser /> {/* Profile Icon */}
        </Link>
        <h1 className="navbar-title">Pet Adoption System</h1>
      </div>
      <style jsx>{`
        .navbar-container {
          display: flex;
          position: relative;
          align-items: flex-start;
          padding: 1rem;
          background-color: #8e2020;
        }

        .navbar-left {
          display: flex;
          align-items: center;
        }

        .navbar-icon-link {
          text-decoration: none;
          color:#f8f8f8;
          padding:2px 5px;
          border:2px solid #f8f8f8;
          border-radius:100%;
          font-size: 1.5rem;
          margin-right: 2.5rem; /* Space between icon and title */
        }

        .navbar-title {
          color:#f8f8f8;
          font-size: 1.5rem;
          font-weight: bold;
          margin-left: -2px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
