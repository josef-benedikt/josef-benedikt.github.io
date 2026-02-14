import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2>Navigation Bar</h2>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/profile">User Profile</NavLink>
        <NavLink to="/cart">Shopping Cart</NavLink>
    </nav>
  );
};

export default Sidebar;