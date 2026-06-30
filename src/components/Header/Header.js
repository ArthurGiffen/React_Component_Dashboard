import React from 'react';
import './Header.css';

function Header({ page, setPage, darkMode, setDarkMode }) {
  return (
    <div className="header">
      <h1>Workout Tracker</h1>
      <div className="nav">
        <button
          className={page === 'home' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setPage('home')}
        >
          Home
        </button>
        <button
          className={page === 'about' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setPage('about')}
        >
          About
        </button>
        <button className="dark-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Header;
