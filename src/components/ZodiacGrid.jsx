import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZodiacCard from './ZodiacCard';
import '../styles/ZodiacGrid.css';
import aries from '../assets/aries.png';
import touro from '../assets/touro.png';
import gemeos from '../assets/gemeos.png';
import cancer from '../assets/cancer.png';
import leao from '../assets/leao.png';
import virgem from '../assets/virgem.png';
import libra from '../assets/libra.png';
import escorpiao from '../assets/escorpiao.png';
import sagitario from '../assets/sagitario.png';
import capricornio from '../assets/capricornio.png';
import aquario from '../assets/aquario.png';
import peixes from '../assets/peixes.png';

const zodiacSigns = [
  { sign: 'Aries', img: aries },
  { sign: 'Touro', img: touro },
  { sign: 'Gemeos', img: gemeos },
  { sign: 'Cancer', img: cancer },
  { sign: 'Leao', img: leao },
  { sign: 'Virgem', img: virgem },
  { sign: 'Libra', img: libra },
  { sign: 'Escorpiao', img: escorpiao },
  { sign: 'Sagitario', img: sagitario },
  { sign: 'Capricornio', img: capricornio },
  { sign: 'Aquario', img: aquario },
  { sign: 'Peixes', img: peixes },
];

const ZodiacGrid = () => {
  let navigate = useNavigate();

  const goToHoroscope = (sign) => {
    console.log(`Navigating to horoscope page for: ${sign}`);
    navigate(`/horoscope/${sign.toLowerCase()}`);
  };

  return (
    <div className="zodiac-grid">
      {zodiacSigns.map((e) => (
        <ZodiacCard sign={e.sign} onClick={() => goToHoroscope(e.sign)} armorImg={e.img}/>
      ))}
    </div>
  );
};

export default ZodiacGrid;