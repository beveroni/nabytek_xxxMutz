import React, { useState, useEffect } from 'react';
import { Product } from '../Product';
import './style.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
