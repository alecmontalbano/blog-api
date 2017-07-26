/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users', (req, res) => {
  res.send('getting dem user!');
});
router.get('/users/:userId', (req, res) => {
  res.send('get that special someone!');
});

router.post('/users', (req, res) => {
  const newUser = new User({email: 'j@j.j'});
  newUser.save(function(){
    res.send('Created a new user');
  });
});
router.put('/users/:userId', (req, res) => {
  res.send('updates errweerr!');
});
router.delete('/users/:userId', (req, res) => {
  res.send('delete dems!');
});

module.exports = router;
