// required imports
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JWTSECRET, JWTEXPIRY } = process.env;
const { errorRes, successRes } = require('../utils/responseHandler');

// console.log('hid');

// console.log(JWTSECRET);

// console.log('lo');

// for the token creation and verification
class jwtServices {
    // creates token for user
    static async createToken (user) {
        try {
            let token = jwt.sign({
                id: user._id,
                phone: user.phone,
                lastname: user.lastname,
                firstname: user.firstname,
                email: user.email,
                role: user.role
            }, JWTSECRET, { expiresIn: JWTEXPIRY });
            // console.log(token);
            // return token
            return token
        } catch (error) {
            // console.log(error.name);
            return errorRes(next, 422, 'Could not create token.');
        }
    }

    // verify user token
    static verifyToken (token) {
        try {
            let decodedToken = jwt.verify(token, JWTSECRET)
            // return decoded token
            return decodedToken;
        } catch (error) {
            // console.log(error);
            return null;
        }
    }
}

module.exports = jwtServices;