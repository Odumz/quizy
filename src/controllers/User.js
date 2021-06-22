const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");

exports.testCtrl = (req, res) => {
  return res.json("testing the API 1..2..3..4..");
};

exports.AuthControllerForRegistration = (req, res) => {
  //destructure the request body
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  //create a regex for validating email
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //     Passwords must be
  //  * - At least 8 characters long, max length anything
  //  * - Include at least 1 lowercase letter
  //  * - 1 capital letter
  //  * - 1 number
  //  * - 1 special character => !@#$%^&*
  const passwordregex =
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

  const phoneNumberRegex = /^[0]\d{10}$/;

  //do simple validation to also make sure things go alright
  if (firstName === "") {
    return res.status(400).json({ error: "First name should not be blank." });
  }
  if (lastName === "") {
    return res.status(400).json({ error: "Last name should not be blank." });
  }
  if (email === "") {
    return res
      .status(400)
      .json({ message: "Email should not be blank.", success: false });
  }
  if (emailPattern.test(email) === false) {
    return res
      .status(400)
      .json({ message: "Invalid email format", success: false });
  }
  if (passwordregex.test(password) === false) {
    return res.status(400).json({
      message:
        "Passsword should contain special characters and be 8 letters long.",
      success: false,
    });
  }

  //check if email already exists
  UserModel.findOne({ email })
    .then((response) => {
      if (response) {
        return res
          .status(400)
          .json({ message: "This account already exists.", success: false });
      }

      // hash password
      bcrypt.hash(password, 10).then((hash) => {
        const person = new UserModel({
          firstName,
          lastName,
          email,
          password: hash,
          phoneNumber,
        });

        person
          .save()
          .then(() => {
            return res.status(201).json({
              message: "Account has been created successfully.",
              success: true,
            });
          })
          .catch((error) => {
            console.log(error);
            return res.status(400).json({
              message: "Try again,couldn't create account.",
              success: false,
            });
          });
      });
    })
    .catch((error) => {
      console.log(error.Error._message);
      return res
        .status(500)
        .json({ message: "Sorry,please try again", success: false });
    });
};
