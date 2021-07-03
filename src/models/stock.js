const mongoose = require('mongoose');

// create profile schema & model
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "authyuser"
    },
    stockholdings: {
        type: Number,
        trim: true,
        required: true
    },
    pnl: {
        type: Number,
        trim: true,
        required: true,
    },
    walletbalance: {
        type: Number,
        trim: true,
        required: true
    },
},
{
    timestamps: true
}
);

const Stock = mongoose.model('stock', StockSchema);

module.exports = Stock;