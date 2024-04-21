import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZodiacCard from './ZodiacCard';
import '../styles/ZodiacGrid.css';

const zodiacSigns = [
  { sign: 'Aries', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Shion_de_Aries_057-600x337.png' },
  { sign: 'Taurus', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Taurus_Aldebaran_Soul_of_Gold_-_02-600x338.png' },
  { sign: 'Gemini', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Gemini_Saga_Soul_of_Gold-2-600x338.png' },
  { sign: 'Cancer', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Mpc-hc-2010-09-06-09-56-06-89-600x338.jpg' },
  { sign: 'Leo', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Aioria-Leo_106-600x450.jpg' },
  { sign: 'Virgo', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/VirgoShaka-1.jpg' },
  { sign: 'Libra', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Dohko_de_Libra-600x450.png' },
  { sign: 'Scorpio', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Milo_anime_01-600x450.jpg' },
  { sign: 'Sagittarius', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Sagittarius-aiolos-saint-seiya-28249-1920x1080-600x338.jpg' },
  { sign: 'Capricorn', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Shura-Capricornio_17-600x450.jpg' },
  { sign: 'Aquarius', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/Aquarius_Camus_Soul_of_Gold-3.png-600x338.png' },
  { sign: 'Pisces', img: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/11/maxresdefault-1-27-600x332.jpg' }
];

const ZodiacGrid = () => {
  let navigate = useNavigate();

  const goToHoroscope = (sign) => {
    navigate(`/horoscope/${sign}`);
  };

  return (
    <div className="zodiac-grid">
      {/* Coloque todos os signos do zodíaco aqui */}
      {zodiacSigns.map((e) => (
        <ZodiacCard sign={e.sign} onClick={() => goToHoroscope(e.sign)} armorImg={e.img}/>
      ))}
    </div>
  );
};

export default ZodiacGrid;

