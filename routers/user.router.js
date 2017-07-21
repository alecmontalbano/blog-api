/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('getting dem user!');
});
router.get('/users/:userId', (req, res) => {
  res.send('get that special someone!');
});

router.post('/users', (req, res) => {
  res.send('creating that new user requested!');
});
router.put('/users/:userId', (req, res) => {
  res.send('updates errweerr!');
});
router.delete('/users/:userId', (req, res) => {
  res.send('delete dems!');
});

module.exports = router;
