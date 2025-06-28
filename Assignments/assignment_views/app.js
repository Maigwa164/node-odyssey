//CORE Modules
const path = require('path');

//NPM PACKACKEGS
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//Importing my  Route packages
const userRoute = require('./routes/users.js');
const addUserRoute = require('./routes/add-users.js');

//Serving files Statically CSS
app.use(express.static(path.join(__dirname, 'public')));

//encoding the body
app.use(bodyParser.urlencoded());

//Importing View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//funel
app.use(userRoute);
app.use('/admin', addUserRoute);

app.use((req, res, next) => {
  // res.sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404.ejs', { docTitle: 'Page not found!' });
});

app.listen(3000);
