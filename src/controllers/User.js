const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");

exports.testCtrl = (req, res) => {
  return res.json("testing the API 1..2..3..4..");
};

exports.AuthControllerForRegistration = (req, res) => {
  //destructure the request body
  const { firstName, lastName, email, password } = req.body;
  //create a regex for validating email
  // let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //do simple validation to also make sure things go alright
  if (firstName === "") {
    return res.status(400).json({ error: "First name should not be blank." });
  }
  if (lastName === "") {
    return res.status(400).json({ error: "Last name should not be blank." });
  }
  if (email === "") {
    return res.status(400).json({ error: "Email should not be blank." });
  }
  // if (emailPattern.test(email) === false) {
  //   console.log(emailPattern.test(email) === false);
  //   return res.status(400).json({ error: "Invalid email format" });
  // }

  //check if email already exists
  UserModel.findOne({ email })
    .then((response) => {
      if (response) {
        return res.status(400).json({ error: "This account already exists." });
      }

      // hash password
      bcrypt.hash(password, 10).then((hash) => {
        const person = new UserModel({
          firstName,
          lastName,
          email,
          password: hash,
        });

        person
          .save()
          .then(() => {
            return res
              .status(201)
              .json({ message: "Account has been created successfully." });
          })
          .catch(() => {
            return res
              .status(400)
              .json({ error: "Try again,couldn't create account." });
          });
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ error: "Sorry,please try again" });
    });
};
