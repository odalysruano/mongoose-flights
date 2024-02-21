const mongoose = require('mongoose');
// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
});

module.exports = mongoose.model('Flight', flightSchema);
