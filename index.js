const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Ты пидор!');
});

app.post('/', (req, res) => {
  res.json(req.body)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
