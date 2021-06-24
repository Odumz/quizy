const { createToken } = require("../services/jwtServices"),
      bcrypt = require('bcryptjs'),
      User = require("../models/Users");

class authController {
  // register a user
  static async userRegistration(req, res, next) {
    User.findOne({email: req.body.email}).then(existingUser => {
      // check if a user with this email exists
      if (existingUser) {
          return res.status(400).json({
              message: "A user with this email already exists"
          });
      }
      // console.log("1");

      // create a new user
      User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phone: req.body.phone,
          email: req.body.email,
          role: req.body.role
      })
      .then(newUser => {
          // hash the password
          // console.log(EXPIRY);
          // console.log("2");
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                  // save the password to the db
                  // console.log(3);
                  newUser.password = hashedPassword;
                  newUser.save((err, savedUser) => {
                      // create jwt for user
                      createToken(newUser).then(token => {
                          // console.log(token)
                          return res.status(200).json({
                              message: "User registration successful",
                              token
                          })
                      }).catch(err => {
                          return res.status(500).json({ err });
                      })
                  });
              })
          })
      })
      .catch(err => {
          return res.status(500).json({ err });
      })
    }).catch(err => {
      if(err.code === '11000'){
        res.json({
            msg:'The phone number has already been registered, please change the phone number',
            success:false
        })
    }
        return res.status(500).json({ err });
    });
  }

  // login a user
  static async userLogin(req, res, next) {
      User.findOne({ email: req.body.email }).then(foundUser => {
          if (!foundUser) {
              return res.status(401).json({
                  message: "Email or password is incorrect"
              })
          }

          let pwdmatch = bcrypt.compareSync(req.body.password, foundUser.password)
          if (!pwdmatch) {
              return res.status(401).json({
                  message: "Email or password is incorrect"
              })
          }
          
          createToken(foundUser).then(token => {
              // console.log(token)
              return res.status(200).json({
                  message: "User logged in succuessful",
                  token
              });
          })
      }).catch(err => {
          return res.status(500).json({ err });
      });
  }

  static async fetchUser (req, res) {
    try {
      const users = await User.find();
      console.log(users)
      res.status(201).json({ 
        status: "success",
        data: users
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

// Token signature
// const signToken = id => {
//   return jwt.sign(
//     { id },
//     process.env.JWT_SECRET,
//     {expiresIn: process.env.JWT_EXPIRY}
//   );
// };



/*
exports.protectRoute = async (req, res, next) => {
  try {
    // get token from req.headers
  let token;
  if (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
     ) {
       token = req.headers.authorization.split(" ")[1];
     }

  // check if there's token in reqq.headers
  if (!token) {
    res.status(401).json({ 
      status: "failed", 
      error: {
        message: "You must log in first, please log in."
      } 
    });
  }

  // verify token
  const decoded = await promisify (jwt.verify) (token, process.env.JWT_SECRET);

  // check if user still exist
  const latestUser = await User.findById(decoded.id);
  if (!latestUser) {
    res.status(401).json({ 
      status: "failed", 
      error: {
        message: "User with this token does no longer exist."
      } 
    });
  }

  if (latestUser.passwordChangedAfterLogin(decoded.iat)) {
    res.status(401).json({ 
      status: "failed", 
      error: {
        message: "Password recently changed, please log in again."
      } 
    });
  }

  // grant access
  req.user = latestUser;
  next();

  } catch (err) {
      res.status(400).json({ 
        status: "failed", 
        error: {
          message: `${err.message}`
        } 
      });
  }
}
*/