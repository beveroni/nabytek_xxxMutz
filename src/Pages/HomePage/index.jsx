import React from 'react';
import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductList } from '../../components/ProductList';

export const Homepage = () => {
  return (
    <div>
      <Header />
      <h1>Aktuální nabídka</h1>
      <p>Nejnovětší prémiové produkty od předních českých designerů.</p>
      <p>Doprava zdarma až k Vám domů, na cenu nehleďte.</p>
      <ProductList />
      <Footer />
    </div>
  );
};
