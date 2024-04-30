import React from 'react';
import ZodiacGrid from "../components/ZodiacGrid";
import '../styles/HomePage.css';
import ZodiacGame from '../components/ZodiacGame';

const HomePage = () => {
  return (
    <div className="home">
      <ZodiacGrid />
      <h1>Bem-vindo ao Jogo do Zodíaco</h1>
      <ZodiacGame />
    </div>
  );
}

export default HomePage;
