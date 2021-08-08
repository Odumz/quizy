/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

// constants
const express = require('express');
const userRoutes = require('./userRoutes')
const stockRoutes = require('./stockRoutes')
const profileRoutes = require('./profileRoutes')
const accountRoutes = require('./questionRoutes')
const router = express.Router();
const { errorRes, successRes } = require('../utils/responseHandler');

// require routes
router.get('/', (req, res) => successRes(res, 200, { message: 'Welcome to the Stocka API v1.0!'}));

// initialize the question routes
router.use('/questions', questionRoutes);

module.exports = router;