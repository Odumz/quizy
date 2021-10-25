/**
 *  Create a connection function for mongodb
 *  Start a local mongodb server connection
 *  Test for database connection or disconnection
 */

const mongoose = require("mongoose"),
      dotenv = require("dotenv");

// Config Env   
dotenv.config();

const env = process.env.NODE_ENV || 'dev';

const MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    socketTimeoutMS: 30000
};

let MONGO_URI

if (env === 'test') {
    MONGO_URI = process.env.TEST_MONGO_URI;
} else {
    MONGO_URI = process.env.MONGO_URI;
}

// create the connection function
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

        console.log("MongoDB connection successful");

        // seed data
    } catch (error) {
        console.error(error.message)
        console.log("MongoDB connection fail");
        process.exit(1);
    }
}

module.exports = connectDB;