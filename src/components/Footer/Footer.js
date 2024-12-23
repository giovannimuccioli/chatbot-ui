/*
Componente per l'invio di messaggi.
Si tratta di un footer poichè voglio che sia sempre visibile in basso.
Due elementi:
- textarea: per scrittura messaggio
- button: per invio messaggio
*/

import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ onSendMessage }) => {
  // Stato per il messaggio: inizialmente vuoto ma si aggiorna ogni volta che l'utente scrive qualcosa
  const [message, setMessage] = useState('');

  // Funzione per inviare il messaggio
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(''); // Reset del messaggio una volta inviato
    }
  };

  // Funzione per inviare il messaggio anche premendo il tasto "invio"
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <footer className="footer">
      <label htmlFor="message-input" className="visually-hidden">Scrivi un messaggio</label>
      <textarea
        id="message-input"
        className="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Scrivi un messaggio..."
      ></textarea>
      <button
        className={`send-button ${message.trim() ? 'enabled' : 'disabled'}`}
        onClick={handleSend}
        disabled={!message.trim()}
      >
        Invia
      </button>
    </footer>
  );
};

export default Footer;
