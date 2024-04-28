import React from 'react';
import '../styles/ZodiacCard.css';

const ZodiacCard = ({ sign, armorImg, onClick }) => {
  return (
    <div className="zodiac-card" onClick={onClick}>
      <img src={armorImg} alt={`${sign} symbol`} />
      <h3>{sign}</h3>
    </div>
  );
};

export default ZodiacCard;