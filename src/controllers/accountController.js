/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

// import models
const Account = require('../models/UserAccount');

// Load method categories.
const lodash = require('lodash');

// const { cloudinary } = require('../utils/cloudinary');

// const upload = require('../utils/multer');

class accountController {
    // get all accounts and send response
    static async getAll(req, res, next) {
        // console.log("request:", req.user);
        let conditions = {};
        
        if (req.query.bankname) {
            conditions.bankname = req.query.bankname
        }

        if (req.query.accountnumber) {
            conditions.accountnumber = req.query.accountnumber
        }
        
        // console.log(conditions)
        // console.log(req.query)
        
        await Account.find(conditions)
        .select('_id bankname accountnumber')
        .exec()
        .then(accounts => {
            if (accounts == '') {
                return res.status(404).json({
                    message: 'No bank account data found'
                })
            }
            const response = {
                message: 'All bank accounts successfully fetched',
                count: accounts.length,
                account: accounts.map(account => {
                    return {
                        _id: account._id,
                        bankname: account.bankname,
                        accountnumber: account.accountnumber
                    }
                })
            };
            res.status(200).send(response);
        }).catch(err => {
            return res.status(500).json({ message: err });
        });
    }

    // get an account
    static async get(req, res, next) {
        await Account.findOne({_id: req.params.id})
            .select('_id bankname accountnumber')
            .then(account => {
                if (!account) {
                    return res.status(404).json({
                        message: 'Error! Bank account not found'
                    })
                }

                const response = {
                    message: 'Bank account successfully fetched',
                    account: account
                };
            res.status(200).send(response);
        }).catch(next);
    }

    // add an account
    static async add(req, res, next) {
        const {bankname, accountnumber, userId} = req.body;
        await Account.create({
            bankname,
            accountnumber,
            userId
        }).then(account => {
            // console.log(account);
            const response = {
                message: "New bank account created", 
                account: {
                    _id: account._id,
                    userId: account.userId,
                    bankname: account.bankname,
                    accountnumber: account.accountnumber
                }
            }
            return res.status(201)
                .send(response);
        }).catch(next);        
    }
    // return res.status(500).json({ message: err });

    // edit an account
    static async edit(req, res, next) {
        await Account.findOneAndUpdate({_id: req.params.id}, req.body).then(image => {
            Account.findOne({_id: req.params.id})
            .select('_id bankname accountnumber')
            .then(account => {
                if (!account) {
                    return res.status(404).json({
                        message: 'Error! Bank account not found'
                    })
                }
                const response = {
                    message: 'Bank account updated successfully',
                    account: account
                }
                res.status(200).send(response);
            }).catch(err => {
                return res.status(500).json({ message: err });
            });
        });
    }

    // delete an account
    static async delete(req, res, next) {
        Account.findOneAndDelete({_id: req.params.id})
        .select('_id bankname accountnumber')
            .then(account => {
                if (!account) {
                    return res.status(404).json({
                        message: 'Error! Bank account not found'
                    })
                }
                const response = {
                    message: 'Bank account deleted successfully',
                    account: 'item no longer exists'
                }
                res.status(200).send(response);
        });
    }
}


module.exports = accountController;