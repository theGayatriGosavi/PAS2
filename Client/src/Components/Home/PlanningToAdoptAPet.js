import React from 'react';
import Card from "./Card";
import { Link } from "react-router-dom";
import listPetImage from './images/graphic1.png';  // Add your image paths
import adoptPetImage from './images/graphic3.png';
import getStartedImage from './images/graphic4.png';

const PlanningToAdoptAPet = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div style={styles.planningContainer}>
      <div style={styles.cardsContainer}>
        <div style={styles.cardWrapper}>
          <Card title="List a Pet for Adoption" description="Help pets find a new home by listing them for adoption." />
          <img src={listPetImage} alt="List a Pet" style={styles.cardImage} />
        </div>
        <div style={styles.cardWrapper}>
          <Card title="Adopt a Pet" description="Find your perfect companion by adopting a pet in need." />
          <img src={adoptPetImage} alt="Adopt a Pet" style={styles.cardImage} />
        </div>
        <div style={styles.cardWrapper}>
          <div style={styles.descriptionWrapper}>
          <Card title="Get Started" description="Begin your journey with us by getting started today!" />
            <Link to='./pets'>
              <button style={styles.adoptButton} onClick={scrollToTop}>
                Adopt a Pet
              </button>
            </Link>
          </div>
          
          <img src={getStartedImage} alt="Get Started" style={styles.cardImage} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  planningContainer: {
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',  // Stacks cards vertically
    gap: '5px',
    width: '100%',
    maxWidth: '600px',  // Limit max width for better readability on larger screens
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2px',  // Add space between description and button
    textAlign: 'center',
  },
  cardImage: {
    width: '130px',
    height: '130px',
    borderRadius: '10px',
    marginLeft: '-20px',
  },
  adoptButton: {
    marginTop: '10px',
    backgroundColor: '#8e2020',
    color: '#f9f9f9',
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    width: '100%',
    textAlign: 'center',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default PlanningToAdoptAPet;
