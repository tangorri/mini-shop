'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models').User;
const Product = require('../models').Product;

const getUserProduct = (req, res) => {
  User.findAll({ indlude: [{ model: Product }] }).then(users => {
    const products = users.products;
    return res.json(products);
  });
}

router
  .get('/', getUserProduct);

module.exports = router;