const jwt = require('jsonwebtoken')
const { verifyToken } = require('../services/jwtServices')

class Auth {
    static async authenticateUser (req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "authorization header required"
            })
        }

        let splitHeader = req.headers.authorization.split(' ');
        // console.log(splitHeader);
        if (splitHeader[0] !== "Bearer") {
            return res.status(401).json({
                message: "wrong authorization format used...bearer <token> expected</token>"
            })
        }        

        let token = splitHeader[1];
        // console.log(token)

        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            return res.status(401).json({
                message: "user not found"
            });
        }
        
        // console.log("dectoken:", decodedToken)
        req.user = decodedToken
        // console.log("req.user", req.user);
        next()
        // return decodedToken
    }

    static async isAdminUser (req, res, next) {
        if (req.user.role !== "admin") {
            return res.status(401).json({
                message: "this route is restricted to admin users"
            });
        }
        return next()
    }

    static async isBusinessOwner (req, res, next) {
        // console.log(req.user);
        let userRole = req.user.role;
        // console.log(userRole);
        if (req.user.role !== "businessowner") {
            if (req.user.role !== "admin") {
                return res.status(401).json({
                    message: "you are not allowed on this route"
                });
            }
        }
        return next()
    }
}

module.exports = Auth;