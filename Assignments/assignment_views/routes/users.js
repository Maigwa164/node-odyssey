//NPM Package
const express = require('express');

//Core modules
const path = require('path');

const router = express.Router();

//importing a module
const addUserData = require('./add-users');

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
  const usersList = addUserData.users;
  res.render('users', { docTitle: 'users', users: usersList, path: '/' });
});

module.exports = router;
