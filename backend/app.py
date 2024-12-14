from flask import Flask, request, jsonify
from flask_cors import CORS
import random

# Inizializzazione dell'app Flask
app = Flask(__name__)
# Abilitazione CORS per gestire richieste da domini diversi (React -> Flask)
CORS(app)

# Simulazione delle risposte della chatbot
responses = [
    "Ciao! Come posso aiutarti?",
    "Interessante, raccontami di più!",
    "Mi piace come stai pensando.",
    "Non sono sicuro di aver capito, potresti ripetere?",
    "Sono qui per aiutarti, dimmi di più."
]

# Endpoint per gestire il messaggio della chatbot
# Si riceve un messaggio/richiesta dall'utente
@app.route('/chat', methods=['POST'])
def chat():
    # Recupera il messaggio dall'utente
    data = request.json
    user_message = data.get("message", "")
    
    # Elaborazione dei dati e generazione di una risposta
    # Risposta casuale
    bot_reply = random.choice(responses)
    
    # Risposta JSON: restituisco il messaggio della chatbot al frontend
    return jsonify({"reply": bot_reply })

# Simulazione dei documenti recuperati con tecnica rag
documents = [
    {
        "title": "1) Introduzione a Python",
        "content": "Python è un linguaggio di programmazione versatile...",
        "link": "https://it.wikipedia.org/wiki/Python"
    },
    {
        "title": "2) Nozioni di base sull'IA",
        "content": "L'intelligenza artificiale è il campo dell'informatica...",
        "link": "https://it.wikipedia.org/wiki/Intelligenza_artificiale"
    },
    {
        "title": "3) Machine Learning spiegato",
        "content": "Il Machine Learning consente ai computer di imparare...",
        "link": "https://www.oracle.com/it/artificial-intelligence/machine-learning/what-is-machine-learning/"
    },
    {
        "title": "4) Cos'è un modello GPT?",
        "content": "GPT è un modello linguistico avanzato sviluppato da OpenAI...",
        "link": "https://openai.com/index/chatgpt/"
    },
    {
        "title": "5) Come funziona RAG?",
        "content": "RAG (Retrieval-Augmented Generation) combina retrieval e generazione...",
        "link": "https://aws.amazon.com/it/what-is/retrieval-augmented-generation/"
    }
]

# Endpoint per recuperare i documenti correlati
@app.route('/documents', methods=['POST'])
def get_documents():
    # Recupera i documenti associati
    related_docs = random.sample(documents, 4)

    # Risposta JSON con i documenti correlati
    return jsonify({"documents": related_docs})


# Avvio del server Flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
