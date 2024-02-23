const mongoose = require('mongoose');
// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String, 
        match: /[A-F][1-9]\d?/
    },
    price: Number,
    flight: Schema.ObjectId,
});

module.exports = mongoose.model('Ticket', ticketSchema);
