/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

// constants
const express = require('express');
const userRoutes = require('./userRoutes')
const stockRoutes = require('./stockRoutes')
const router = express.Router();

// require routes
router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to the Stocka API v1.0!',
    });
  });

router.use('/auth', userRoutes);

router.use('/stocks', stockRoutes);

module.exports = router;