var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../model/user')
var config = require('../db/mongoConfig')
var util = require('util');



/* GET users listing. */
/* Creation des comptes ayant accès au backend */
router.post('/register', function(req, res) {
    console.log(req.body);
    if(!req.body.email || !req.body.password) {
      res.status(400).json({ success: false, message: 'Please enter email and password.' });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      // Attempt to save the user
      newUser.save(function(err) {
        if (err) {
          return res.status(400).json({ success: false, message: 'That email address already exists.'});
        }
        res.status(201).json({ success: true, message: 'Successfully created new user.' });
      });
    }
  });

  // Authenticate the user and get a JSON Web Token to include in the header of future requests.
  router.post('/authenticate', function(req, res) {
    console.log('avant authentification : ', util.inspect(req.user));
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;
      console.log(user.email+"\n"+user.password)
      if (!user) {
        res.status(401).json({ success: false, message: 'Authentication failed. User not found.' });
      } else {
        // Check if password matches
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // Create token if the password matched and no error was thrown
            const token = jwt.sign({data:user}, config.secret, {
              expiresIn: 10080 // in seconds
            });
            res.status(200).json({ success: true, message: 'JWT ' + token });
          } else {
            res.status(401).json({ success: false, message: 'Authentication failed. Passwords did not match.' });
          }
        });
      }
    });
  });

module.exports = router;
