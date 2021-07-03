/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

// import models
const User = require('../models/Users');

// Load method categories.
const lodash = require('lodash');

const { cloudinary } = require('../utils/cloudinary');

// const upload = require('../utils/multer');

class profileController {
    // upload an image
    static async uploadImage(req, res, next) {
        console.log(req.body);
        const uploaded = await cloudinary.uploader.upload(req.file.path, {
            use_filename: true,
            resource_type: "auto"
          })
            .then(result => {
                // console.log(result);
                return result;
            }).catch(err => {
                // console.log(err.message)
            });
        await User.findOneAndUpdate({_id: req.params.id}, {
            profileImage: uploaded.public_id
        }, {
            new: true
          }).then(user => {
            User.findOne({_id: req.params.id})
            .select('_id firstname lastname email phone role profileImage isAdmin isBusinessOwner isSubscribed isPushNotificationActive')
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        message: 'Error! User not found'
                    })
                }
                const response = {
                    message: 'User profile updated successfully',
                    user: user
                }
                res.status(200).send(response);
            }).catch(err => {
                return res.status(500).json({ message: err.message });
            });
        });      
    }

    // edit a profile
    static async editUserInfo(req, res, next) {
        await User.findOneAndUpdate({_id: req.params.id}, req.body).then(user => {
            User.findOne({_id: req.params.id})
            .select('_id firstname lastname email phone role isAdmin isBusinessOwner profileImage isSubscribed isPushNotificationActive')
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        message: 'Error! user not found'
                    })
                }
                const response = {
                    message: 'user updated successfully',
                    user: user
                }
                res.status(200).send(response);
            }).catch(err => {
                return res.status(500).json({ message: err });
            });
        });
    }

    // delete a profile image
    static async removeProfileImage(req, res, next) {
        await User.findOneAndUpdate({_id: req.params.id}, req.body).then(user => {
            User.findOne({_id: req.params.id})
            .select('_id firstname lastname email phone role isAdmin isBusinessOwner profileImage isSubscribed isPushNotificationActive')
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        message: 'Error! User not found'
                    })
                }
                const response = {
                    message: 'User profile image deleted',
                    user: user
                }
                res.status(200).send(response);
            }).catch(err => {
                return res.status(500).json({ message: err });
            });
        });
    }
}


module.exports = profileController;