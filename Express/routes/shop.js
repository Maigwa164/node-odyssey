const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  // console.log('In the second middleware');
  // res.send('<h1>Hello from Express</h1>');
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
