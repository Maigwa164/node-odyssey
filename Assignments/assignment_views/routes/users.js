//NPM Package
const express = require('express');

//Core modules
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

module.exports = router;
