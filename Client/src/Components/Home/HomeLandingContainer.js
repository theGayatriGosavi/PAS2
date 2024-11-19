import React from "react";


const HomeLandingContainer = (props) => {
  
  return (
    <div style={styles.homeContainer}>
     
    </div>
  );
};

const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    flexWrap: 'wrap',
  },
  leftContainer: {
    flex: '1 1 50%',
    padding: '10px',
  },
  rightContainer: {
    flex: '1 1 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#8e2020',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#8e2020',
    color: '#f9f9f9',
    padding: '10px 10px',
    borderRadius: '10px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
  },
};

export default HomeLandingContainer;