const mongoose = require('mongoose');
const { type } = require('os');

const DriversSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },

    wins: {
        type: Number,
        
    },

    podiums: {
        type: Number,
        
    },

    poles: {
        type: Number,
        
    },

    last_w: {
        type: String,
        trim: true
    }

});

module.exports = mongoose.model('Drivers', DriversSchema);