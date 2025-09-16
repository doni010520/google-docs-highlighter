FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

RUN mkdir -p /app/logs /app/data

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/status', (r) => {r.statusCode === 200 ? process.exit(0) : process.exit(1)})"

CMD ["node", "src/server.js"]
