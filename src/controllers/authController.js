const { createToken } = require("../services/jwtServices"),
      bcrypt = require('bcryptjs'),
      User = require("../models/Users");
const { errorRes, successRes } = require('../utils/responseHandler');

class authController {
  // register a user
  static async userRegistration(req, res, next) {
    const {firstname, lastname, email, password, phone, role} = req.body;
    if (!firstname || !lastname || !email || !password || !phone) {
      return errorRes(next, 400, 'Bad request, missing some details.');
    }
    if (password.length < 8) {
      return errorRes(next, 400, 'Password can\'t be less than 8 characters');
    }
    User.findOne({email}).then(existingUser => {
      // check if a user with this email exists
      if (existingUser) {
          return errorRes(next, 409, 'A user with this email already exists.');
      }
      // console.log(existingUser);

      // create a new user
      User.create({
          firstname,
          lastname,
          phone,
          email,
          role
      })
      .then(newUser => {
          // hash the password
          // console.log(EXPIRY);
          // console.log("2");
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(password, salt, (err, hashedPassword) => {
                  // save the password to the db
                  // console.log(3);
                  newUser.password = hashedPassword;
                  newUser.save((err, savedUser) => {
                      // create jwt for user
                      createToken(newUser).then(token => {
                        // console.log(token)
                          const user = {
                            id: newUser.id,
                            firstname: newUser.firstname,
                            lastname: newUser.lastname,
                            email: newUser.email,
                            phone: newUser.phone,
                            role: newUser.role
                          }
                          return successRes(res, 201, {
                            message: "User registration successful",
                            user,
                            token
                          })
                      }).catch(error => {
                          return errorRes(next, 422, 'Could not create user.');
                      })
                  });
              })
          })
      })
      .catch(err => {
          return errorRes(next, 400, 'Bad request, missing some details.');
      })
    }).catch(err => {
      return errorRes(next, 500, 'Internal server error.');
    });
  }

  // login a user
  static async userLogin(req, res, next) {
    const {email, password} = req.body;
    if (!email || !password) {
      return errorRes(next, 400, 'Bad request, missing some details.');
    }
    User.findOne({ email }).then(foundUser => {
        if (!foundUser) {
            return errorRes(next, 401, 'Email or password is incorrect.')
        }

        let pwdmatch = bcrypt.compareSync(password, foundUser.password)
        if (!pwdmatch) {
            return errorRes(next, 401, 'Email or password is incorrect.')
        }
        
        createToken(foundUser).then(token => {
            console.log(token)
            const user = {
              id: foundUser.id,
              firstname: foundUser.firstname,
              lastname: foundUser.lastname,
              email: foundUser.email,
              phone: foundUser.phone,
              role: foundUser.role
            }
            return successRes(res, 200, {
              message: "User logged in successfully",
              user,
              token
          });
        })
    }).catch(err => {
      errorRes(next, 500, 'Internal server error.');
    });
  }

  static async fetchUser (req, res) {
    try {

      let conditions = {};
        
      if (req.query.firstname) {
          conditions.firstname = req.query.firstname
      }

      if (req.query.lastname) {
          conditions.lastname = req.query.lastname
      }

      if (req.query.email) {
          conditions.email = req.query.email
      }

      if (req.query.phone) {
          conditions.phone = req.query.phone
      }

      if (req.query.role) {
          conditions.role = req.query.role
      }

      if (req.query.profileImage) {
        conditions.profileImage = req.query.profileImage
    }

      const users = await User.find(conditions).select('_id firstname lastname email phone role isAdmin isBusinessOwner profileImage');
      // console.log(users)
      successRes(res, 200, {
        message: "Users fetched successfully",
        count: users.length,
        users
      });  
    } catch (err) {
        res.status(400).json({ 
            status: "failed", 
            error: {
              message: `${err.message}`
            } 
          });
    }
  };

  static async fetchUserById (req, res) {
    try {
      const users = await User.find({_id: req.params.id}).select('_id firstname lastname email phone role isAdmin isBusinessOwner profile');
      // console.log(users)
      successRes(res, 200, {
        message: "Users fetched successfully",
        count: users.length,
        users
      });  
    } catch (err) {
        res.status(400).json({ 
            status: "failed", 
            error: {
              message: `${err.message}`
            } 
          });
    }
  };

}

module.exports = authController;