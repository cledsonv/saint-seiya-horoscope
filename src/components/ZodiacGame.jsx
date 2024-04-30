import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ZodiacCard from './ZodiacCard';
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
import '../styles/ZodiacGame.css';

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

const ZodiacGame = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  let navigate = useNavigate();

  const randomizeSign = () => {
    const randomIndex = Math.floor(Math.random() * zodiacSigns.length);
    setSelectedSign(zodiacSigns[randomIndex]);
  };

  const goToHoroscope = (sign) => {
    navigate(`/horoscope/${sign.toLowerCase()}`);
  };

  return (
    <div className="zodiac-game">
      {selectedSign ? (
        <>
          <ZodiacCard sign={selectedSign.sign} armorImg={selectedSign.img} />
          <p>O signo selecionado foi {selectedSign.sign}</p>
          <button onClick={() => goToHoroscope(selectedSign.sign)}>Ir para Horóscopo</button>
          <button onClick={randomizeSign}>Selecionar outro signo</button>
        </>
      ) : (
        <button onClick={randomizeSign}>Começar Jogo</button>
      )}
    </div>
  );
};

export default ZodiacGame;
