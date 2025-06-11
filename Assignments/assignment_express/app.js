const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
  res.send('<ul><li>David</li> <li>Muiruri</li> <li>Maigwa</li></ul>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to the home page</h1>');
});

app.listen(3000);
