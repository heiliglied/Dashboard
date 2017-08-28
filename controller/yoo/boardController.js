const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.getHomePage = (req,res) => {
  res.render('home', {title: '스터디'});
};

exports.getBoard = async (req, res) => {
  const posts = await Post.find().sort({number: -1});
  console.log(posts);
  res.render('yoo/board', {posts});
};

exports.addPost = (req, res) => {
  res.render('yoo/editPost');
};

exports.createPost = async (req, res) => {
  const post = await (new Post(req.body).save()); 
  res.redirect('/yoo');
};