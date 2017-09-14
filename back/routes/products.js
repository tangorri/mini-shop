const express = require('express');
const router = express.Router();

const Product = require('../models').Product;


const getProducts = (req, res) => Product.findAll()
  .then(products => res.json(products));

router
  .get('/', getProducts);

module.exports = router;