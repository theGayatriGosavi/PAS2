import React from "react";

const Card = (props) => {
  return (
    <div className="card-container" style={styles.cardContainer}>
      <h2 style={styles.headerText}>{props.title}</h2>
      <p style={styles.descriptionText}>{props.description}</p>
      <div>
         
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin:'10px',
    padding: '5px',
    minWidth:'45vw',
    maxWidth:'50vw',
    maxHeight:'45vw',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  headerText: {
    fontSize: '20px',
    color: '#8e2020',
    fontWeight: 'bold',
    padding:'5px'
  },
  descriptionText: {
    fontSize: '16px',
    color: '#8e2020',
  },
};

export default Card;
