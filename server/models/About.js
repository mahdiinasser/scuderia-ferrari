const mongoose = require('mongoose');
const { type } = require('os');

const AboutSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
    }

    
});

module.exports = mongoose.model('About', AboutSchema);