import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './products.json';

const Checkout = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Replicating your localStorage.getItem('userCart') logic
    const rawData = localStorage.getItem('cartData');
    if (rawData) {
      const { quantities, grandTotal } = JSON.parse(rawData);
      
      // Filter products to only show what was actually bought (qty > 0)
      const purchasedItems = products.filter(p => quantities[p.id] > 0).map(p => ({
        ...p,
        qty: quantities[p.id]
      }));

      setOrder(purchasedItems);
      setTotal(grandTotal);
    }
  }, []);

  const handleConfirm = () => {
    alert("Order Confirmed! Thank you for shopping with Josef.");
    localStorage.removeItem('cartData'); // Clear cart after order
    navigate('/');
  };

  return (
    <div className="content">
      <h1>Checkout Summary</h1>
      
      <div className="order-details">
        {order.length > 0 ? (
          order.map(item => (
            <p key={item.id}>
              {item.name} ({item.qty}) - ₱{item.qty * item.price}
            </p>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <hr />
      <h2>Total: ₱{total}</h2>

      <div className="button-container">
        <button className="submit" onClick={handleConfirm}>Confirm Order</button>
        <button className="submit" onClick={() => navigate('/cart')}>Back to Cart</button>
      </div>

      <footer>
        <p className="footer-about">Desserts by Josef - Copyright 2026</p>
      </footer>
    </div>
  );
};

export default Checkout;