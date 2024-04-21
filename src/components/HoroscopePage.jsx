import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/HoroscopePage.css';

const HoroscopePage = () => {
    let { sign } = useParams();
    // A variável sign deve ser "Libra" para esta página específica
    const today = new Date().toLocaleDateString();
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString();
  
    const horoscopeData = {
      today: "O Sol entra em sua zona de parcerias, trazendo novas conexões e reforçando as existentes, balanceando a balança da harmonia em seus relacionamentos, Libra. Um momento para refletir sobre dar e receber, e encontrar o equilíbrio perfeito em suas interações.",
      tomorrow: "Amanhã promete ser um dia de descobertas internas, onde sua busca pela justiça e igualdade pode ser recompensada com insights profundos. Esteja aberto a diálogos que podem trazer luz a questões pendentes."
    };
  
    return (
      <div className="horoscope-page" sign={sign}>
        <h1>Horóscopo do Dia para {sign}</h1>
        <div className="horoscope-date">{today}</div>
        <div className="horoscope-text">{horoscopeData.today}</div>
        <div className="horoscope-date">{tomorrow}</div>
        <div className="horoscope-text">{horoscopeData.tomorrow}</div>
      </div>
    );
  };
  
  export default HoroscopePage;