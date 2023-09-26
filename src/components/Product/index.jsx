import './style.css';
import React from 'react';

export const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
    </div>
  );
};
