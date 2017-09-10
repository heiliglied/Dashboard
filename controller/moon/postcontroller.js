const mongoose = require('mongoose');
const Content = mongoose.model('Content');

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
    var page = req.params.page;
    var key = req.params.page;

    var blockSize = 5;
    var pageSize = 2;

    if (typeof page === 'undefined' || page == '') {
        page = 1;
    }

    if (typeof key === 'undefined' || key == '') {
        var lists = await Content.find().sort({ number: -1 }).skip(((page - 1) * pageSize)).limit(pageSize);
    } else {
        var lists = await Content.find({
            $or: [
                {
                    'name': '/' + key + '/'
                },
                {
                    'subject': '/' + key + '/'
                }
            ]
        }).sort({ number: -1 }).skip(((page - 1) * pageSize)).limit(pageSize);
    }
    
    res.render('moon/list', { lists });

};

exports.view = async function (req, res) {

    var content = await Content.find({ number: req.params.number }).limit(1);
    content = content[0];
    //console.log(content[0]);

    res.render('moon/view', { content });
};

exports.modify = async function (req, res) {

    var content = await Content.find({ number: req.params.number }).limit(1);
    content = content[0];

    res.render('moon/modify', { content });

};