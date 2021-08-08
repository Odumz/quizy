const mongoose = require('mongoose');

// create profile schema & model
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    alternatives: [
        {
            options: {
                type: String,
                trim: true,
                required: true
            },
            isCorrect: {
                type: Boolean,
                default: 0,
                required: true
            }
        }
    ],
},
{
    timestamps: true
}
);

const Question = mongoose.model('questions', QuestionSchema);

module.exports = Question;