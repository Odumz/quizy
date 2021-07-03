const mongoose = require('mongoose');

// create profile schema & model
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "authyuser"
    },
    bankname: {
        type: String,
        required: true,
        minLength: 4
    },
    accountnumber: {
        type: Number,
        required: true,
        minLength: 10
    }
},
{
    timestamps: true
}
);

const UserAccount = mongoose.model('useraccount', UserAccountSchema);

module.exports = UserAccount;