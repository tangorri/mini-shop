const express = require('express');
const router = express.Router();

const User = require('../models').User;


const getUsers = (req, res) => User.findAll()
  .then(users => res.json(users));


router
  .get('/', getUsers);

module.exports = router;