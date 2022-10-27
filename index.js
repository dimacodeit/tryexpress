require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  if (Object.keys(req.query).length !== 0) return res.json(req.query);
  return res.send('Лох, отправь query параметры!');
});

app.post('/', (req, res) => {
  res.json(req.body);
});

app.use(require('./app/src/routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
