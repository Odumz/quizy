/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

// constants
const express = require('express');
const profileController = require('../controllers/profileController');
const upload = require('../utils/multer')
const { authenticateUser } = require('../middleware/auth')
const router = express.Router();

router.get('/test', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Stocka API v1.0! This is user profile route',
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
//  router.get('/', profileController.getAll); 


/**
 * /api/v1/${id}:
 *  get:
 *    summary: Route for getting all records
 *    responses:
 *      '200':
 *        description: OK
 */
//  router.get('/:id', profileController.get); 

/**
 * /api/v1/create:
 *  post:
 *    summary: Route for creating a record
 *    responses:
 *      '200':
 *        description: OK
 */
router.put('/image/upload/:id',  upload.single('profileImage'), profileController.uploadImage); 


/**
 * /api/v1/edit/${id}:
 *  put:
 *    summary: Route for editing a record
 *    responses:
 *      '200':
 *        description: OK
 */
 router.put('/edit/:id', profileController.editUserInfo);


/**
 * /api/v1/delete/${id}:
 *  delet:
 *    summary: Route for deleting a record
 *    responses:
 *      '200':
 *        description: OK
 */
// router.delete('/delete/:id', profileController.delete);


/**
 * /api/v1/delete/${id}:
 *  delet:
 *    summary: Route for deleting a record
 *    responses:
 *      '200':
 *        description: OK
 */
 router.put('/image/delete/:id', profileController.removeProfileImage);

module.exports = router;