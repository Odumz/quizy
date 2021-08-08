/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

// constants
const express = require('express');
const questionController = require('../controllers/questionController');
// const { authenticateUser } = require('../middleware/auth')
const router = express.Router();

router.get('/test', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Quizy API v1.0! This is question route',
  });
});


/**
 * /api/v1/:
 *  get:
 *    summary: Route for getting all records
 *    responses:
 *      '200':
 *        description: OK
 */
 router.get('/', questionController.getAll); 


/**
 * /api/v1/${id}:
 *  get:
 *    summary: Route for getting all records
 *    responses:
 *      '200':
 *        description: OK
 */
 router.get('/:id', questionController.get); 

/**
 * /api/v1/create:
 *  post:
 *    summary: Route for creating a record
 *    responses:
 *      '200':
 *        description: OK
 */
// router.put('/image/upload/:id',  upload.single('profileImage'), profileController.uploadImage); 


/**
 * /api/v1/edit/${id}:
 *  put:
 *    summary: Route for editing a record
 *    responses:
 *      '200':
 *        description: OK
 */
 router.put('/:id', questionController.edit);


/**
 * /api/v1/delete/${id}:
 *  delet:
 *    summary: Route for deleting a record
 *    responses:
 *      '200':
 *        description: OK
 */
router.delete('/:id', questionController.delete);


/**
 * /api/v1/delete/${id}:
 *  delet:
 *    summary: Route for deleting a record
 *    responses:
 *      '200':
 *        description: OK
 */
 router.post('/', questionController.add);

module.exports = router;