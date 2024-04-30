import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/HoroscopePage.css';

function HoroscopePage() {
  const [horoscope, setHoroscope] = useState({
    daily: '',
    weekly: '',
    monthly: '',
    annual: {}
  });

  const { sign } = useParams();

  useEffect(() => {
    const fetchHoroscope = async () => {
      const baseUrl = 'http://localhost:5000/api/horoscope';
      try {
        const response = await axios.get(`${baseUrl}/${sign}`);
        setHoroscope(response.data);
      } catch (error) {
        console.error('Failed to fetch horoscope data:', error);
      }
    };
  
    fetchHoroscope();
  }, [sign]);

  // Função para renderizar o horóscopo anual
  const renderAnnualHoroscope = (annualData) => {
    return (
      <div>
        <h4>Introdução</h4>
        <p>{annualData.introduction}</p>
        {Object.entries(annualData).map(([key, value]) => {
          // Evitar renderizar a introdução novamente
          if (key !== "introduction") {
            return (
              <div key={key}>
                <h4>{key}</h4>
                <p>{value}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="horoscope-container">
      <h2>Horóscopo de {sign.charAt(0).toUpperCase() + sign.slice(1)}</h2>
      <h3>Diário</h3>
      <p>{horoscope.daily}</p>
      <h3>Semanal</h3>
      <p>{horoscope.weekly}</p>
      <h3>Mensal</h3>
      <p>{horoscope.monthly}</p>
      <h3>Anual</h3>
      {renderAnnualHoroscope(horoscope.annual)}
    </div>
  );
}

export default HoroscopePage;
