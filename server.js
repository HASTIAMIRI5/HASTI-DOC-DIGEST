require('dotenv').config();
const express = require('express');
const path = require('path');
const { analyzeDocument } = require('./src/documentDigest');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    app: process.env.APP_NAME || 'Hasti Doc Digest',
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/analyze', (req, res) => {
  const { text, title } = req.body || {};

  if (!text || !String(text).trim()) {
    return res.status(400).json({
      error: 'Document text is required for analysis.',
    });
  }

  try {
    const result = analyzeDocument(String(text), title ? String(title).trim() : '');
    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      error: 'Unable to analyze the document right now.',
      details: error.message,
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Hasti Doc Digest running at http://localhost:${PORT}`);
});
