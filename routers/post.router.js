/* jshint esversion:6*/
const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.get('/posts', (req, res) => {
  Post.find({}, function(err, posts){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      post: posts
    });
  });
});
router.get('/posts/:postId', (req, res) => {
  Post.find({_id : req.params.postId }, function(err, posts){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      posts: posts
    });
  });
});

router.post('/posts', (req, res) => {
  res.send('creating that new post requested!');
});
router.put('/posts/:postId', (req, res) => {
  Post.findOneAndUpdate({_id: req.params.postId}, req.body, function(err){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "Successfully updated post"
    });
  });
});
router.delete('/posts/:postId', (req, res) => {
  Post.findOneAndRemove({_id: req.params.postId}, function(err, removedPost){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "Post successfully removed"
    });
  });
});

module.exports = router;
