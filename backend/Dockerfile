# Immagine di base Python
FROM python:3.11-slim

# Directory di lavoro
WORKDIR /app

# Copia del file requirements.txt
COPY backend/requirements.txt /app/

# Installazione delle dipendenze
RUN pip install --no-cache-dir -r requirements.txt

# Copia del resto dei file del progetto nella cartella /app
COPY backend/ /app/

# Esposizione della porta 5000 (defualt per flask)
EXPOSE 5000

# Comando per avviare l'app: server flask
CMD ["python", "app.py"]
