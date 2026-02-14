import React from 'react';
import productsData from './products.json';

const Products = () => {
  return (
    <div className="content">
      <h1>All Products</h1>
      <div className="gallery">
        {productsData.map((product) => (
          <div key={product.id} className="food-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;