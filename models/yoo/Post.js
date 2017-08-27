const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter your name'
  },
  password: {
    //TODO add hash encrypt process
    type: String,
    trim: true,
    required: 'Please enter password'
  },
  title: {
    type: String,
    required: 'Please enter title'
  },
  content: {
    type: String
  },
  number: {
    type: Number,
    default: 1
  },
  created: {
    type: Date,
    default: Date.now()
  }

});

postSchema.pre('save', async function(next) {
  const maxNumberPost = await this
    .constructor
    .find()
    .sort({number: -1})
    .limit(1);
  
  if (maxNumberPost.length) {
    this.number = maxNumberPost[0].number + 1;
  }
  next();
});

exports.module = mongoose.model('Post', postSchema);