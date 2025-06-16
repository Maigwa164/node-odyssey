// ****core modules***
// const http = require('http'); ---not needed
const path = require('path');

// ****npm modules***
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//templating Engine
app.set('view engine', 'pug');
app.set('views', 'views');

//*****my modules */
const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');
const adminData = require('./routes/admin.js');
const { render } = require('pug');

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'public'))); //fetch css files

app.use('/admin', adminData.routes);

app.use(shopRoute);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { docTitle: 'Page not found!' });
});

// const server = http.createServer(app);
// server.listen(3000);****shortend to ⏓

app.listen(3000);
