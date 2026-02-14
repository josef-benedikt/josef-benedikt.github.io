import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => (
  <header>
    <div className="header">
      <img 
        src="https://images.seeklogo.com/logo-png/29/2/sweet-dessert-logo-png_seeklogo-298730.png" 
        className="logo" 
        alt="logo" 
      />
      <h2>Desserts by Josef</h2> 
      <h3>High Quality and Affordable!</h3>
      <p><Link to="/login">Login</Link></p>
    </div>
  </header>
);

export default Header;