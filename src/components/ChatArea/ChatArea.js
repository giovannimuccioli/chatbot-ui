/*
Componente principale della chatbot. 
Contiene due elementi fondamentali:
- main: la chat effettiva tra utente-bot
- aside: la sidebar con i documenti correlati
*/

import React, { useEffect, useRef } from 'react';
import './ChatArea.css';

const ChatArea = ({ messages, relatedDocs }) => {
  // Riferimento alla sezione dei messaggi
  const messagesEndRef = useRef(null);

  // Funzione per scorrere automaticamente verso l'ultimo messaggio in modo fluido
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll ogni volta che l'array dei messaggi cambiano
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <main className="chat-area">
      <div className={`messages ${messages.length === 0 ? 'no-scroll' : ''}`}>
        {messages.length === 0 ? (
          <div className="initial-message">
            <p>Scrivi un messaggio per ricevere una risposta.</p>
          </div>
        ) : (
          // Ogni messaggio ha una key basata sull'indice dell'array, e una classe CSS che dipende dal mittente del messaggio (msg.sender).
          messages.map((msg, index) => (
            <div key={index} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))
        )}
        <div ref={messagesEndRef}></div>
      </div>

      <aside className="sidebar">
        <h2>Documenti correlati</h2>
        {relatedDocs.length === 0 ? (
          <div className="initial-docs">
            <p>I documenti correlati alla risposta verranno mostrati qui una volta iniziata la chat.</p>
          </div>
        ) : (
          // Ogni documento ha una key basata sull'indice dell'array.
          relatedDocs.map((doc, index) => (
            <div key={index} className="document">
              <h3>{doc.title}</h3>
              <p>{doc.content}</p>
              <a href={doc.link} target="_blank" rel="noopener noreferrer">
                Leggi di più
              </a>
            </div>
          ))
        )}
      </aside>
    </main>
  );
};

export default ChatArea;
