import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" > <img src={logo} alt="Logo" /></NavLink>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;