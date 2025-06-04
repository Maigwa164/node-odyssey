// ****core modules***
// const http = require('http'); ---not needed
const path = require('path');

// ****npm modules***
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//*****my modules */
const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoute);

app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// const server = http.createServer(app);
// server.listen(3000);****shortend to ⏓

app.listen(3000);
