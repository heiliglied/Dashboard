const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please input your name.'
    },
    subject: {
        type: String,
        trim: true,
        required: 'Please insert subject.'
    },
    content: {
        type: String,
        trim: true,
        required: 'Please insert content.'
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

contentSchema.pre('save', async function (next) {
    const maxNumberPost = await this
        .constructor
        .find()
        .sort({ number: -1 })
        .limit(1);

    if (maxNumberPost.length) {
        this.number = maxNumberPost[0].number + 1;
    }
    next();
});

exports.module = mongoose.model('Content', contentSchema);