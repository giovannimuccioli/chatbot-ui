/*
Componente principale dell'applicazione.
Appare come un "contenitore"/wrappper per tutti gli altri componenti.
Quindi coordina i componenti
e gestisce l'interazione tra di essi, con il backend.
*/

import React, { useState } from 'react';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import ChatArea from './components/ChatArea/ChatArea';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]); // Stato per i messaggi della chat
  const [relatedDocs, setRelatedDocs] = useState([]); // Stato per i documenti correlati
  const [region, setRegion] = useState('');  // Stato per la regione selezionata
  const [showIntro, setShowIntro] = useState(true);  // Stato per la visibilità della pagina intro: visibile

  // Definisco le funzioni per modificare appositamente gli stati
  
  // Funzione per avviare la chat, passando la regione selezionata
  const handleStartChat = (selectedRegion) => {
    setRegion(selectedRegion); // Imposta la regione selezionata come stato
    setShowIntro(false); // Stato non visibile
  };

  // Funzione per avviare una nuova chat
  const handleStartNewChat = () => {
    setMessages([]); // Reset messaggi
    setRelatedDocs([]); // Reset documenti correlati
    setShowIntro(true); // Mostra la schermata di intro
  }

  // URL del backend
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  
  // Funzione per gestione invio messaggi
  const handleSendMessage = async (message) => {
    if (!message.trim()) return; // Se il messaggio è vuoto, non fa nulla

    // Aggiorno lo stato con il messaggio dell'utente
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: message }]);

    try {
      // Richiesta al backend per ottenere la risposta del bot
      const response = await fetch(`${backendUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      // Estrae la risposta dal JSON
      const data = await response.json();
      // Estrae la risposta del bot
      const botReply = data.reply;

      // Aggiorna lo stato con la risposta del bot
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botReply }]);

      // Richiesta al backend per i documenti correlati
      const docsResponse = await fetch(`${backendUrl}/documents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      // Estrae i documenti correlati dal JSON
      const docsData = await docsResponse.json();

      // Aggiorna lo stato con i documenti correlati
      setRelatedDocs(docsData.documents);
    } catch (error) {
      console.error('Errore durante la comunicazione con il backend:', error);
    }
  };

  return (
    <div className="app">
      {showIntro ? (
        <Intro onStartChat={handleStartChat} />
        ) : (
          <>
            <Header region={region} onStartNewChat={handleStartNewChat} />
            <ChatArea messages={messages} relatedDocs={relatedDocs} />
            <Footer onSendMessage={handleSendMessage} />
          </>
        )}
    </div>
  );
};

export default App;
