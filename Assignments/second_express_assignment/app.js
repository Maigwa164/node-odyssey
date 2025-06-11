//core modules

//package modules
const express = require('express');

//My packages
const homeRoute = require('./routes/home.js');
const userRoutes = require('./routes/user.js');

//-------****--------
const app = express();

// middlewares routes

app.use(homeRoute);
app.use(userRoutes);
app.listen(8080);
