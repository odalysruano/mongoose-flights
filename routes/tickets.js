const express = require('express');
const ticketsCtrl = require('../controllers/tickets');
const router = express.Router();

router.post('/flights/:id/tickets/new', ticketsCtrl.create);
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

module.exports = router;
