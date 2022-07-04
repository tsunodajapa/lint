const express = require('express');

const app = express();

app.listen(3333, () => {
  console.log('teste');
});

const carros = [
  { name: 'teste 1' },
  { name: 'teste 1' },
  { name: 'teste 1' },
  { name: 'teste 1' },
];
