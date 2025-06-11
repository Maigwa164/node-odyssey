//core modules
const path = require('path');

//package modules
const express = require('express');
const bodyParser = require('body-parser');

//My packages
const homeRoute = require('./routes/home.js');
const userRoutes = require('./routes/user.js');
const addUserRoute = require('./routes/add-user.js');

//-------****--------
const app = express();

//Converting parsed body content
app.use(bodyParser.urlencoded());

// middlewares routes
app.use(express.static(path.join(__dirname, 'public')));

//middleware funnel
app.use(homeRoute);
app.use(userRoutes);
app.use(addUserRoute);

app.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(8080);
