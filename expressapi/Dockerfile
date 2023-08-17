FROM node:16.20-alpine
WORKDIR /app/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD ["npm", "start"]