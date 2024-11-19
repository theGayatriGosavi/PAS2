import React from "react";
import { Link } from "react-router-dom";

const AdoptSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const sectionStyle = {
    textAlign: "center",
    padding: "2rem",
    color: "#8e2020",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fdf4f4",
    minWidth: "100vw"
  };

  const headingStyle = {
    color: "#8e2020",
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  const subheadingStyle = {
    color: "#8e2020",
    fontSize: "1.5rem",
    marginTop: "1.5rem",
  };

  const paragraphStyle = {
    lineHeight: "1.6",
    fontSize: "1rem",
    color: "#5a5a5a",
    margin: "1rem 0",
  };

  const listStyle = {
    textAlign: "left",
    margin: "0 auto",
    maxWidth: "400px",
    color: "#8e2020",
  };

  const buttonStyle = {
    backgroundColor: "#8e2020",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "2rem",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Adopt a Pet</h2>

      <p style={paragraphStyle}>
        Welcome to our pet adoption program! Adopting a pet is a wonderful way
        to bring joy and companionship into your life.
      </p>

      <h3 style={subheadingStyle}>Benefits of Pet Adoption</h3>
      <ul style={listStyle}>
        <li>Provide a loving home to a pet in need</li>
        <li>Experience the unconditional love of a pet</li>
        <li>Create lasting memories and cherished moments</li>
      </ul>

      <h3 style={subheadingStyle}>Adoption Process</h3>
      <ol style={listStyle}>
        <li>Fill out an adoption application</li>
        <li>Meet potential pets in person</li>
        <li>Complete the necessary paperwork</li>
      </ol>

      <h3 style={subheadingStyle}>Responsibilities</h3>
      <p style={paragraphStyle}>
        Adopting a pet comes with responsibilities, including feeding, grooming,
        regular exercise, and providing medical care.
      </p>

      <Link to="/pets">
        <button style={buttonStyle} onClick={scrollToTop}>
          Find Your Perfect Pet
        </button>
      </Link>
    </section>
  );
};

export default AdoptSection;
