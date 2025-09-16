// Express Server
// NOTA: Este é um arquivo placeholder. Substitua com o conteúdo completo do artifact

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'Google Docs Highlighter',
    version: '1.0.0',
    message: 'Substitua este arquivo com o conteúdo completo do artifact server.js',
    endpoints: ['/status', '/health', '/process']
  });
});

app.get('/status', (req, res) => {
  res.json({ status: 'online', configured: false });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.post('/process', (req, res) => {
  res.json({
    success: false,
    message: 'Implemente a lógica completa substituindo os arquivos src/'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});