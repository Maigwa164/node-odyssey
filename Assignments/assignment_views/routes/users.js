//Core modules
const path = require('path');

//NPM Package
const express = require('express');

const router = require(express.Router());

router.get('/', (req, res, next) => {
  res.sendFile();
});

module.exports = router;
