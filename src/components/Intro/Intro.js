/*
Componente introduttiva all'applicazione.
Essa è la prima "pagina" che l'utente vede, 
imponendo all'utente di selezionare una regione
sulla quale si focalizzerà la chatbot.
*/

import React, { useState } from 'react';
import './Intro.css';

const Intro = ({ onStartChat }) => {
    // Hook per gestire lo stato della regione selezionata
    const [region, setRegion] = useState('');

    // Definisco un array di regioni
    const regions = [
        'Emilia Romagna', 
        'Veneto',
        'Marche',
        'Lombardia',
    ]
    
    // Funzione per gestire l'inizio della chat
    const handleStart = () => {
        if (region) {
            onStartChat(region);
        }
    };

    return (
        <div className="intro-container">
            <div className="intro-content">
                <h1>Benvenuto nella Chatbot!</h1>
                <p>Seleziona la regione di interesse per iniziare la conversazione.</p>
            </div>
            <div className="menu-button-container">
                <label htmlFor="select-region-menu" className="visually-hidden">Seleziona una regione possibile</label>
                <select 
                  id="select-region-menu"
                  name="region"
                  className="region-dropdown"
                  autoComplete="off"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                    <option value="">Seleziona una regione</option>
                    {regions.map((regionName, index) => (
                        <option key={index} value={regionName}>
                            {regionName}
                        </option>
                    ))}
                </select>
                <button
                  className={`start-button ${!region ? 'disabled' : 'enabled'}`}
                  onClick={handleStart}
                  disabled={!region}
                >
                    Inizia la conversazione
                </button>
            </div>
        </div>
    );
};

export default Intro;
