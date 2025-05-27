// ****core modules***
const http = require('http');

// ****npm modules***
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Int the first middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In the second middleware');
});
const server = http.createServer(app);
server.listen(3000);
