/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

// import models
const Question = require('../models/question');

// Load method categories.
const lodash = require('lodash');

// const { cloudinary } = require('../utils/cloudinary');

// const upload = require('../utils/multer');

class questionController {
    // get all questions and send response
    static async getAll(req, res, next) {
        // console.log("request:", req.user);
        let conditions = {};
        
        if (req.query.bankname) {
            conditions.bankname = req.query.bankname
        }

        if (req.query.option) {
            conditions.option = req.query.option
        }
        
        // console.log(conditions)
        // console.log(req.query)
        
        await Question.find(conditions)
        .select('_id description option')
        .exec()
        .then(questions => {
            if (questions == '') {
                return res.status(404).json({
                    message: 'No question found'
                })
            }
            const response = {
                message: 'All questions successfully fetched',
                count: questions.length,
                question: questions.map(question => {
                    return {
                        _id: question._id,
                        description: question.description,
                        option: question.option
                    }
                })
            };
            res.status(200).send(response);
        }).catch(err => {
            return res.status(500).json({ message: err });
        });
    }

    // get a question
    static async get(req, res, next) {
        await Question.findOne({_id: req.params.id})
            .select('_id description option')
            .then(question => {
                if (!question) {
                    return res.status(404).json({
                        message: 'Error! Question not found'
                    })
                }

                const response = {
                    message: 'Question successfully fetched',
                    question: question
                };
            res.status(200).send(response);
        }).catch(next);
    }

    // add a question
    static async add(req, res, next) {
        const {description, option} = req.body;
        await Question.create({
            description,
            option,
        }).then(question => {
            // console.log(question);
            const response = {
                message: "New question created", 
                question: {
                    _id: question._id,
                    description: question.description,
                    option: question.option
                }
            }
            return res.status(201)
                .send(response);
        }).catch(next);        
    }
    // return res.status(500).json({ message: err });

    // edit an question
    static async edit(req, res, next) {
        await Question.findOneAndUpdate({_id: req.params.id}, req.body).then(image => {
            Question.findOne({_id: req.params.id})
            .select('_id description option')
            .then(question => {
                if (!question) {
                    return res.status(404).json({
                        message: 'Error! Question not found'
                    })
                }
                const response = {
                    message: 'Question updated successfully',
                    question: question
                }
                res.status(200).send(response);
            }).catch(err => {
                return res.status(500).json({ message: err });
            });
        });
    }

    // delete an question
    static async delete(req, res, next) {
        Question.findOneAndDelete({_id: req.params.id})
        .select('_id description option')
            .then(question => {
                if (!question) {
                    return res.status(404).json({
                        message: 'Error! Question not found'
                    })
                }
                const response = {
                    message: 'Question deleted successfully',
                    question: 'item no longer exists'
                }
                res.status(200).send(response);
        });
    }
}


module.exports = questionController;