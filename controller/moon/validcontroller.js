//커스텀 미들웨어.
function validcontroller(req, res, next)
{
    if (req.body.name == '') {
        req.flash('message', 'Not Name');
        res.redirect('/moon/write');
    } else if(req.body.subject == ''){
        req.flash('message', 'Not Subject');
        res.redirect('/moon/write');
    } else {
        next();
    }
}

module.exports = validcontroller;