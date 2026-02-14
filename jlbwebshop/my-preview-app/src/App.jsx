import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.css';
import Header from './header';
import Sidebar from './sidebar';
import Home from './home';
import Products from './products';
import About from './about';
import Contact from './contact';
import Profile from './profile';
import Signup from './signup';
import Cart from './cart';
import Checkout from './checkout';
import Receipt from './receipt';

function App() {
  return (
    
    <Router>
      <Header />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;