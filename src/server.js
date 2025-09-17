const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.json({
    name: 'Google Docs Highlighter',
    version: '1.0.0',
    status: 'online',
    port: PORT,
    endpoints: ['/status', '/health', '/auth', '/process']
  });
});

app.get('/status', (req, res) => {
  res.json({ 
    status: 'online', 
    configured: false,
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/auth', (req, res) => {
  res.json({
    message: 'OAuth não configurado ainda',
    info: 'Configure as credenciais do Google primeiro'
  });
});

app.post('/process', (req, res) => {
  res.json({
    success: false,
    message: 'Serviço não configurado completamente ainda'
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
