
const express = require('express');
const statusRouter = express.Router();
const getStatus = require('../controllers/statusController')
// Retrieve status of ticket
statusRouter.put('/:id',getStatus);

module.exports = statusRouter