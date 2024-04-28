import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import { useParams } from 'react-router-dom';

function HoroscopePage() {
  const [horoscope, setHoroscope] = useState({
    daily: '',
    weekly: '',
    monthly: '',
    annual: ''
  });

  const { sign } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const urls = {
        dailyUrl: `https://www.horoscopovirtual.com.br/horoscopo/${sign}`,
        weeklyUrl: `https://www.horoscopovirtual.com.br/horoscoposemanal/${sign}`,
        monthlyUrl: `https://www.horoscopovirtual.com.br/horoscopomensal/${sign}`,
        annualUrl: `https://www.horoscopovirtual.com.br/artigos/horoscopo-${sign}-2024-previsao-anual`
      };

      try {
        const responses = await Promise.all(Object.values(urls).map(url => axios.get(url)));
        const horoscopeContent = responses.map(response => {
          const $ = cheerio.load(response.data);
          // Aqui você usa '.find' para buscar dentro do contexto de 'article' com o ID específico do signo
          // e então encontrar o parágrafo com a classe 'text-pred'
          return $(`article#${sign}-name`).find('p.text-pred').text().trim();
        });
  
        setHoroscope({
          daily: horoscopeContent[0],
          weekly: horoscopeContent[1],
          monthly: horoscopeContent[2],
          annual: horoscopeContent[3]
        });
      } catch (error) {
        console.error('Failed to fetch horoscope data:', error);
      }
    };
  
    fetchData();
  }, [sign]);

  return (
    <div>
      <h2>Horóscopo de {sign.charAt(0).toUpperCase() + sign.slice(1)}</h2>
      <h3>Diário</h3>
      <p>{horoscope.daily}</p>
      <h3>Semanal</h3>
      <p>{horoscope.weekly}</p>
      <h3>Mensal</h3>
      <p>{horoscope.monthly}</p>
      <h3>Anual</h3>
      <p>{horoscope.annual}</p>
    </div>
  );
}

export default HoroscopePage;
