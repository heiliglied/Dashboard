function logincheck(req, res, next){
    if (req.session.auth != 'Y') {
        res.redirect('/');
    } else {
        next();
    }
}

module.exports = logincheck;