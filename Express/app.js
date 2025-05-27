// ****core modules***
const http = require('http');

// ****npm modules***
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Int the first middleware');
  next(); //Allows request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In the second middleware');
  res.send('<h1>Hello from Express</h1>');
});
const server = http.createServer(app);
server.listen(3000);
