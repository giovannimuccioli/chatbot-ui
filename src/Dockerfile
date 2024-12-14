# Immagine di base Node.js
FROM node:16

# Directory di lavoro
WORKDIR /app

# Copia dei file package.json e package-lock.json
COPY package*.json /app/

# Installazione dipendenze
RUN npm install

# Copia di tutto il codice del frontend nel container
COPY src/ /app/src/

# Copia della cartella public nel container
COPY public/ /app/public/

# Per produzione -> costruzione progetto React
# RUN npm run build

# Per produzione -> installazione globale di 'serve' per servire la build
# RUN npm install -g serve

# Esposizione della porta 3000 per il server frontend (default per react)
EXPOSE 3000

# Modalità sviluppo: comando predefinito per avviare il container e quindi l'app
CMD ["npm", "start"]

# Modalità produzione (con serve): comando predefinito per avviare il container e quindi l'app
# CMD ["serve", "-s", "build", "-l", "3000"]