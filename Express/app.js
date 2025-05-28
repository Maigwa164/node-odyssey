// ****core modules***
// const http = require('http'); ---not needed

// ****npm modules***
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/add-product', (req, res, next) => {
  res.send('<h1>The "Add Product" Page');
});

app.use('/', (req, res, next) => {
  console.log('In the second middleware');
  res.send('<h1>Hello from Express</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);****shortend to ⏓

app.listen(3000);
