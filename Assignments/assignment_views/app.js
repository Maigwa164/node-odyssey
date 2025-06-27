//CORE Modules
const path = require('path');

//NPM PACKACKEGS
const express = require('express');

const app = express();

//Importing my  Route packages
const userRoute = require('./routes/users.js');

//Serving files Statically CSS
app.use(express.static(path.join(__dirname, 'public')));

//funel
app.use(userRoute);

app.use((req, res, next) => {
  res.send('<h1>I am working!</h1>');
});

app.listen(3000);
