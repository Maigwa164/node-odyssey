//core modules

//package modules
const express = require('express');

//My packages
const homeRoute = require('./routes/home.js');
const userRoutes = require('./routes/user.js');

//-------****--------
const app = express();

// app.use((req, res, next) => {
//   res.send('<h1>Hello world</h1>');
// });

app.listen(8080);
