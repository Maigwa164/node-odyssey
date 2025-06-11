//core modules
const path = require('path');

//package modules
const express = require('express');

//My packages
const homeRoute = require('./routes/home.js');
const userRoutes = require('./routes/user.js');

//-------****--------
const app = express();

// middlewares routes
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(userRoutes);

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(8080);
