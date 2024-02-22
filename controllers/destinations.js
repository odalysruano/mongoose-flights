const Flight = require('../models/flight');

async function create(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        flight.destinations.push(req.body);
        await flight.save();
        res.redirect(`/flights/${flight._id}`)
    } catch(err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}

module.exports = {
    create,
};
