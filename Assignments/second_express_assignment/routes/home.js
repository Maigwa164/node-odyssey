const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

module.exports = router;
