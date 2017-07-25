/* jshint esversion:6*/
const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
  res.send('getting dem post!');
});
router.get('/posts/:postId', (req, res) => {
  res.send('get that special post!');
});

router.post('/posts', (req, res) => {
  res.send('creating that new post requested!');
});
router.put('/posts/:postId', (req, res) => {
  res.send('updates errweerr!');
});
router.delete('/posts/:postId', (req, res) => {
  res.send('delete dems!');
});

module.exports = router;
