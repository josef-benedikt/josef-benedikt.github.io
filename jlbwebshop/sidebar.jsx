import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2>Navigation Bar</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
        <li><Link to="/cart">Shopping Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;