// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// In-memory storage (for demonstration purposes)
let state = {
  points: 0,
  energy: 1000,
  clicks: [],
  apiUrl: 'http://example.com/7281467896:AAGX_RgV2ioEn2K6j8km1rKNZ8u0_JFtR2k',
  serverUrl: 'http://example.com'
};

app.use(cors());
app.use(bodyParser.json());

app.post('/save', (req, res) => {
  state = req.body;
  console.log('Saved data:', state);
  res.sendStatus(200);
});

app.get('/load', (req, res) => {
  res.json(state);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
