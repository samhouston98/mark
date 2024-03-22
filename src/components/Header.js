// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  let navigate = useNavigate();
  let location = useLocation();

  // Determine the next page based on the current location
  const getNextPage = () => {
    switch (location.pathname) {
      case '/':
        return '/quotes'; // From Timeline to Quotes
      case '/quotes':
        return '/gallery'; // From Quotes to Gallery
      case '/gallery':
        return '/hobbies'; // From Gallery to Hobbies
      case '/hobbies':
      default:
        return '/'; // From Hobbies back to Timeline
    }
  };

  // Determine button label based on the next page
  const buttonLabel = () => {
    switch (getNextPage()) {
      case '/quotes':
        return 'View Quotes';
      case '/gallery':
        return 'View Gallery';
      case '/hobbies':
        return 'View Hobbies';
      default:
        return 'View Timeline';
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome, Mark!</h1>
      <p>Celebrating the journey of a remarkable life.</p>
      <button onClick={() => navigate(getNextPage())} style={{ padding: '10px', marginTop: '20px', fontSize: '1rem' }}>
        {buttonLabel()}
      </button>
    </motion.header>
  );
}

export default Header;
