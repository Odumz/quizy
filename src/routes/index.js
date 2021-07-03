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
const accountRoutes = require('./accountRoutes')
const router = express.Router();
const { errorRes, successRes } = require('../utils/responseHandler');

// require routes
router.get('/', (req, res) => successRes(res, 200, { message: 'Welcome to the Stocka API v1.0!'}));

// initialize the auth routes
router.use('/auth', userRoutes);

// initialize the stock routes
router.use('/stocks', stockRoutes);

// initialize the profile routes
router.use('/profile', profileRoutes);

// initialize the account routes
router.use('/accounts', accountRoutes);

module.exports = router;