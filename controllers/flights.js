const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create,
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
    if (req.body.flightNo === '') {
        res.render('flights/new', { title: 'Add Flight', errorMsg: "Error: Flight Number Missing" });
        return;
    } 
    if (req.body.departs === '') {
        res.render('flights/new', { title: 'Add Flight', errorMsg: "Error: Departure Date/Time Missing" });
        return;
    } 
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('/flights/new', { errorMsg: err.message });
    }
}
