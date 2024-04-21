import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ZodiacGrid from './components/ZodiacGrid';
import HoroscopePage from './components/HoroscopePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ZodiacGrid />} />
          <Route path="/horoscope/:sign" element={<HoroscopePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;