const path = require("path"),

      dotenv = require("dotenv"),
      jwt = require("jsonwebtoken"),
      User = require("../models/Users");

// Config Env   
dotenv.config({ path: path.resolve(__dirname, "../../config.env") });

// Token signature
const signToken = id => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {expiresIn: process.env.JWT_EXPIRES_IN}
  );
};

// exports.registerUser = async (req, res, next) => {
//   try {
//     // create new user
//     const newUser = await User.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       phoneNumber: req.body.phoneNumber,
//       password: req.body.password,
//       passwordConfirm: req.body.passwordConfirm
//     });

//     const token = signToken(newUser._id);

//     res.status(201).json({ 
//       status: "success",
//       token, 
//       data: newUser
//     });

//   } catch (err) {
//       res.status(400).json({ 
//         status: "failed", 
//         error: {
//           message: `${err.message}`
//         } 
//       });
//   }
// };

/*
 * @route POST api/v1/login
 * @desc login a user
 * @access public
 */

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // validete request
    if (!email || !password) {
      return res.status(400).json({ 
        status: "failed", 
        error: {
        message: "Please provide your email and password!"
        } 
      });
    }
    // check if user exist & password is correct
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password, user.password))) {
      return res.status(401).json({ 
        status: "failed", 
        error: {
        message: "Your email or password is incorrect"
        } 
      });
    }
    // If request is OK
    const token = signToken(user._id);

    res.status(200).json({ 
      status: "success",
      token
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
