//CORE Modules
const path = require('path');

//NPM PACKACKEGS
const express = require('express');

const app = express();

//Importing my  Route packages
const userRoute = require('./routes/users.js');
const addUserRoute = require('./routes/add-users.js');

//Serving files Statically CSS
app.use(express.static(path.join(__dirname, 'public')));

//funel
app.use(userRoute);
app.use(addUserRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
