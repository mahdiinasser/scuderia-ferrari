const mongoose = require('mongoose');
const { type } = require('os');

const SpecsSchema = new mongoose.Schema({
    horsepower: {
        type: String,
        trim: true,
    },

    engine: {
        type: String,
        trim: true,
    },

    energy: {
        type: String,
        trim: true,
    },

    displacement: {
        type: String,
        trim: true,
    },

    power: {
        type: String,
        trim: true,
    }

});

module.exports = mongoose.model('Specs', SpecsSchema);