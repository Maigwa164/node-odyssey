const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');
const { title } = require('process');

const products = [];

//Admin add-product -> GET

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    docTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    formCSS: true,
    productCSS: true,
  });
});

//Admin add product -> POST
router.post('/add-product', (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
});

// module.exports = router;

exports.routes = router;
exports.products = products;
