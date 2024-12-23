/*
Componente per il menu laterale.
*/

import React from 'react';
import './Menu.css';

const Menu = ({ onClose }) => {
  // Invocazione della funzione di chiusura del menu al click sull'icona "x"
  // La funzione viene passata come props dal componente "Header"
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Menu</h2>
        <span className="close-icon" onClick={onClose}>
          x
        </span>
      </div>
      <div className="menu-content">
        <p>Al momento, questo è il menu laterale. Aggiungere qui altre opzioni in futuro.</p>
      </div>
    </div>
  );
};

export default Menu;
