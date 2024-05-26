const mongoose = require('mongoose');
const { type } = require('os');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },

    caption: {
        type: String,
        trim: true,
    }

});

module.exports = mongoose.model('News', NewsSchema);