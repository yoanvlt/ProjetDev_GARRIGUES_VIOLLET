const express = require('express');
const { testConnection } = require('./database'); 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/test-db', async (req, res) => {
  const message = await testConnection();
  res.send(message);
});

app.listen(port, () => {
  console.log(`L'application écoute sur http://localhost:${port}`);
});
