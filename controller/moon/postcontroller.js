const mongoose = require('mongoose');
const Content = mongoose.model('Content');

exports.post = async function (req, res) {
    var insert = await (new Content(req.body).save());
    res.redirect('/moon/list');
};

exports.list = async function (req, res) {
    console.log(req);
    res.render('moon/list');

};