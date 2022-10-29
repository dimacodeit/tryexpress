require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Twitter app works')
});

app.use(require('./app/src/routes'));

app.listen(port, () => {
  console.log(`Twitter app listening on port ${port}`);
});
