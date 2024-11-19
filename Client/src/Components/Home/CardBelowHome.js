import React from 'react';
import HomeDarkCardLeftPic from "./images/HomeDarkCardLeftPic.png";
import HomeDarkCardRightPic from "./images/HomeDarkCardRightPic.png";

const formatNumber = (number) => {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const suffixNum = Math.floor(('' + number).length / 3);
  const shortNumber = parseFloat((number / Math.pow(1000, suffixNum)).toFixed(1));
  return shortNumber >= 1 ? `${shortNumber}${suffixes[suffixNum]}${"+"}` : number.toString();
};

const CardBelowHome = () => {
  const adoptedPets = formatNumber(1212);
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <img src={HomeDarkCardLeftPic} alt="Dog with toy" style={styles.image} />
        <p style={styles.text}>
          <span>{adoptedPets}+</span> Find your<br /> new Friend here
        </p>
      </div>
      <div style={styles.section}>
        <img src={HomeDarkCardRightPic} alt="Dog pic" style={styles.image} />
        <p style={styles.text}>WHAT WE DO? AdoptPet helps you find the perfect pet for your family.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#8e2020',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    color: 'white',
  },
  section: {
    flex: '1 1 45%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    color: '#f9f9f9',
    padding: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    margin: '0 10px',
  },
};

export default CardBelowHome;
