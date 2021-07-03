const mongoose = require('mongoose');

// create profile schema & model
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8
    },
    role: {
        type: String,
        enum: ["admin", "businessowner", "not assigned"],
        default: "not assigned"
    },
    isBusinessOwner: {
        type: Boolean,
        default: 0,
    },
    isAdmin: {
        type: Boolean,
        default: 0
    },
    isVerified: {
        type: Boolean,
        default: 0
    },
    profileImage: {
        type: String,
        minLength: 14
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: "useraccount"
    },
},
{
    timestamps: true
}
);

const User = mongoose.model('authyuser', UserSchema);

module.exports = User;