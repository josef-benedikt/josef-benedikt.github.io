import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products.json';

const Receipt = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    const rawData = localStorage.getItem('cartData');
    if (rawData) {
      const { quantities, grandTotal } = JSON.parse(rawData);
      
      const purchasedItems = products.filter(p => quantities[p.id] > 0).map(p => ({
        ...p,
        qty: quantities[p.id]
      }));

      setOrder(purchasedItems);
      setTotal(grandTotal);
      
      
      setOrderId(`JB-${Math.floor(Math.random() * 1000)}`);
    }
  }, []);

  return (
    <div className="content">
      <h1>E-Receipt</h1>
      
      <div className="order-details">
        <h3>Order Successful!</h3>
        <p>Order ID: #{orderId}</p>
        <hr />
        
        {order.length > 0 ? (
          order.map(item => (
            <p key={item.id}>
              {item.name} x {item.qty} — ₱{item.qty * item.price}
            </p>
          ))
        ) : (
          <p>No recent transaction found.</p>
        )}
      </div>

      <hr />
      <h2>Total: ₱{total}</h2>

      <div className="button-container">
        <button className="submit" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>

      <footer>
        <p className="footer-about">Desserts by Josef - Copyright 2026</p>
      </footer>
    </div>
  );
};

export default Receipt;