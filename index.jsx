import React from 'react';
import './styles.css';
import products from './index.json';

const Home = () => {
  return (
    <div className="content"> 
      <h1>Featured Products</h1>
      <div className="gallery"> 
        {products.map((item) => (
          <div key={item.id} className="food-card"> 
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;