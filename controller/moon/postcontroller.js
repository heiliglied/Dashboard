const mongoose = require('mongoose');
const Content = mongoose.model('Content');

exports.post = async function (req, res) {
    var insert = await (new Content(req.body).save());
    res.redirect('/moon');
};

exports.list = async function (req, res) {
    var list = await Content.find().sort({ number: -1 });
    console.log(list);
};