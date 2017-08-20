const mongoose = require('mongoose');
const Sample = mongoose.model('Sample');

exports.homePage = (req, res) => {
  res.send('homepage');
};

exports.dashBoard = (req, res) => {
 res.render('layout', {title: 'abc'});
};

exports.sampleForm = async (req, res) => {
  const sample = new Sample(req.body);
  await sample.save();
  res.redirect('/yoo');
};

exports.getData = async (req, res) => {
  const data = await Sample.find();
  res.render('showData', {data});
};


