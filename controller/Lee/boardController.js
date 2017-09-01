const mongoose = require('mongoose');
const post = mongoose.model('Post');

exports.indexBoard = (req,res) => {
	res.render('Lee/board');
}

exports.writeBoard = (req,res) => {
	res.render('Lee/write');
}