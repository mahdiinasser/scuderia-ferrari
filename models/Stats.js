const mongoose = require('mongoose');
const { type } = require('os');

const StatsSchema = new mongoose.Schema({
    horsepower: {
        type: String,
        trim: true,
    },

    engine: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Stats', StatsSchema);