# Define la imagen base de Docker que utilizarás para construir tu contenedor
FROM node:latest

# Crea un directorio de trabajo para tu aplicación
WORKDIR /app

# Copia los archivos de la aplicación al directorio de trabajo
COPY package*.json ./
COPY index.js ./

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto en el que escucha la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD [ "npm", "start" ]