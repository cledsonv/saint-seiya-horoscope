import React from 'react';
import '../styles/ZodiacCard.css';

const ZodiacCard = ({ sign, onClick, armorImg }) => {
  return (
    <div className="zodiac-card" onClick={onClick}>
      <img src={armorImg} alt={sign} className="armor-image" />
      <h2 className="sign-name">{sign}</h2>
    </div>
  );
};

export default ZodiacCard;