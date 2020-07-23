const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/signup', (req, res) => {
  console.log('user signup');

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
      if (err) {
          console.log('User.js post error: ', err);
      } else if (user) {
          res.json({
              error: `Sorry, already a user with the username: ${username}`
          });
      }
      else {
        bcrypt.genSalt(saltRounds, function(err, salt) {
          if(err) throw err;

          bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw err;

            const newUser = new User({
              username: username,
              password: hash
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);

                req.session.username = username;
                console.log(req.session);

                res.json(savedUser);
            });

          });
        });

      }
  });
});

router.post('/login', (req, res) => {
  console.log('user login');

  const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log('User.js post error: ', err);
    } else if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if(err) throw err;

        if(result == true) {
          req.session.username = username;
          console.log(req.session);

          res.send("Login Success");
        }
      })
    } else {
      res.json({
        error: `Incorrect username or password.`
      });
    }
  });
});

router.get('/currentUser', (req, res) => {
  res.json({
    username: req.session.username
  })
})

module.exports = router;