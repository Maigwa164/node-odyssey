// ****core modules***
// const http = require('http'); ---not needed

// ****npm modules***
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use('/', (req, res, next) => {
//   console.log('This always runs');
//   next();
// });
app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action = "/product" method = "POST"><input = "text" name = "title"></input><button type = "submit">submit</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  // console.log('In the second middleware');
  res.send('<h1>Hello from Express</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);****shortend to ⏓

app.listen(3000);
