// ****core modules***
// const http = require('http'); ---not needed

// ****npm modules***
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//*****my modules */
const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');

app.use(bodyParser.urlencoded());

app.use(adminRoute);

app.use(shopRoute);

// const server = http.createServer(app);
// server.listen(3000);****shortend to ⏓

app.listen(3000);
