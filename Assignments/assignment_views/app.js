//NPM PACKACKEGS
const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.send('<h1>I am working</h1>');
});

app.listen(3000);
