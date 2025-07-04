// core module
const path = require('path');

//third party package
const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

module.exports = router;
