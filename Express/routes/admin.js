const express = require('express');

const router = express.Router();

//Admin add-product -> GET

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action = "/admin/add-product" method = "POST"><input = "text" name = "title"></input><button type = "submit">submit</button></form>'
  );
});

//Admin add product -> POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
