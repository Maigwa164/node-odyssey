const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const { products } = require('../../../Express/routes/admin');

const router = express.Router();

const users = [];

router.get('/add-users', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-users.html'));
  res.render('add-users', { docTitle: 'add-users', path: 'add-users' });
});

router.post('/add-users', (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect('/');
});

// module.exports = router;

exports.routes = router;
exports.users = users;
