// moment library handle time.
exports.moment = require('moment');

// Dump is debugging function like console.log
exports.dump = (obj) => JSON.stringfy(obj, null, 2);

exports.menu = [
  { slug: '/moon', title: 'Moon'},
  { slug: '/im', title: 'im'},
  { slug: '/lee', title: 'lee'},
  { slug: '/yoo', title: 'yoo'}
];