const mongoose = require('mongoose');
// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX', 'SAN'],
    },
    arrival: Date,
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);
