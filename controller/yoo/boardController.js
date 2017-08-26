exports.getHomePage = (req,res) => {
  res.render('home', {title: '스터디'});
};

exports.getBoard = (req, res) => {
  res.render('yoo/board');
};

exports.addPost = (req, res) => {
  res.render('yoo/editPost');
};