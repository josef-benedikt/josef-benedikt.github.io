import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './cart.json';

const Cart = () => {
  const navigate = useNavigate();
  
  
  const [quantities, setQuantities] = useState({
    vanilla: 0, cookie: 0, cake: 0, blue: 0, peach: 0
  });

  const [grandTotal, setGrandTotal] = useState(0);

  
  useEffect(() => {
    const total = products.reduce((sum, item) => {
      return sum + (item.price * (quantities[item.id] || 0));
    }, 0);
    setGrandTotal(total);
  }, [quantities]);

  const handleQtyChange = (id, value) => {
    const val = parseInt(value) || 0;
    setQuantities({ ...quantities, [id]: val });
  };

  const proceedToCheckout = () => {
    if (grandTotal === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    localStorage.setItem('cartData', JSON.stringify({ quantities, grandTotal }));
    navigate('/checkout');
  };

  return (
    <div className="content">
      <h1>Your Shopping Cart</h1>
      
      {products.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} className="cart-img" alt={item.name} />
          <div className="cart-details">
            <p>{item.name} - ₱{item.price}</p>
            <input 
              type="number" 
              className="qty" 
              min="0" 
              value={quantities[item.id]} 
              onChange={(e) => handleQtyChange(item.id, e.target.value)}
            />
          </div>
        </div>
      ))}

      <div className="total-container">
        <h3>Grand Total: ₱<span id="grand-total">{grandTotal}</span></h3>
        <button className="submit" onClick={proceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;