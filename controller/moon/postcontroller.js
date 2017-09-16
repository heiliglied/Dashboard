const mongoose = require('mongoose');
const Content = mongoose.model('Content');
var Methods = require('./methods');

exports.post = async function (req, res) {
    
    var insert = await (new Content(req.body).save());
    res.redirect('/moon/list');
    
};

exports.update = async function (req, res) {

    var _id = req.body._id;
    
    await Content.findByIdAndUpdate(_id, req.body, function (err, Content) {
        if (err) {
            res.redirect("back");
        } else {
            res.redirect('/moon/list');
        }
    });
}

exports.delete = async function (req, res) {
    var _id = req.body._id;

    await Content.deleteOne({
        _id: _id
    },
        function (err, Content) {
            if (err) {
                res.redirect("back");
            } else {
                res.redirect('/moon/list');
            }
        }
    );
}

exports.list = async function (req, res) {
    var page = (req.params.page) ? req.params.page : req.query.page;
    var key = (req.params.key) ? req.params.key : req.query.key;

    var blockSize = 5;
    var pageSize = 1;

    var totalCount = 0;

    if (typeof page === 'undefined' || page == '') {
        page = 1;
    }

    if (typeof key === 'undefined' || key == '') {

        key = '';

        totalCount = await Content.count();
        var lists = await Content.find().sort({ number: -1 }).skip(((page - 1) * pageSize)).limit(pageSize);
    } else {
        totalCount = await Content.find({
            $or: [
                {
                    'name': key
                },
                {
                    'subject': key
                }
            ]
        }).count();
        var lists = await Content.find({
            $or: [
                {
                    'name': key
                },
                {
                    'subject': key
                }
            ]
        }).sort({ number: -1 }).skip(((page - 1) * pageSize)).limit(pageSize);
    }

    var paging = Methods.paging('/moon/list', key, totalCount, page, blockSize, pageSize);
    res.render('moon/list', { lists: lists, page: paging });
};

exports.view = async function (req, res) {
    var content = await Content.find({ number: req.params.number }).limit(1);
    content = content[0];

    if (typeof(content) === 'undefined') {
        backURL = req.header('Referer') || '/';
        res.redirect(backURL);
    }

    res.render('moon/view', { content, csrfToken: req.csrfToken() });
};

exports.modify = async function (req, res) {
    var content = await Content.find({ number: req.params.number }).limit(1);
    content = content[0];
    res.render('moon/modify', { content, csrfToken: req.csrfToken() });
};