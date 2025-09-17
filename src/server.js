=const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; // PORTA 4000

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.json({
    name: 'Google Docs Highlighter',
    version: '1.0.0',
    status: 'online',
    port: PORT
  });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/status', (req, res) => {
  res.json({ status: 'online', port: PORT });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
