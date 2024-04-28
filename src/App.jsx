import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HoroscopePage from './components/HoroscopePage';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import About from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/horoscope/:sign" element={<HoroscopePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;