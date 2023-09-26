import React from 'react';
import { Homepage } from './Pages/HomePage';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Homepage />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
