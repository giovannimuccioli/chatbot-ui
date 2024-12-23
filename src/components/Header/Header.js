/*
Componente per l'header dell'applicazione.
Viene quindi utilizzato un header come elemento per fare 
in modo che questo sia fissato in alto.
Nella sua parte sinistra, fa uso del componente "Menu"
*/

import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

const Header = ({ region, onStartNewChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per gestire l'apertura/chiusura del menu: inizialmente chiuso -> isMenuOpen = false

  // Funzione per aprire/chiudere il menu
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Se è aperto, lo chiudo al click
    } else {
      setIsMenuOpen(true); // Se è chiuso, lo apro al click
    }
  };
  
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-icon" onClick={toggleMenu}>☰</button>
      </div>
      <div className="header-center">
        <div className="chat-name-container">
          <h1 className="chat-name">{`Chatbot per ${region}`}</h1>
        </div>
      </div>
      <div className="header-right">
        <button className="new-chat-icon" onClick={onStartNewChat}>+</button>
      </div>
      {isMenuOpen && <Menu onClose={toggleMenu} />}
    </header>
  );
};

export default Header;
