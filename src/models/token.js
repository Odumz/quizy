const mongoose = require('mongoose');

// create profile schema & model
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "authyuser"
    },
    token: {
        type: String,
        required: true,
        minLength: 4
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600, // this is the expiry time in seconds
    }
});

const Token = mongoose.model('token', TokenSchema);

module.exports = Token;