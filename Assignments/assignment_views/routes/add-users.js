const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-users', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-users.html'));
});

module.exports = router;
