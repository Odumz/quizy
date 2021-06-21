const Validator = require("validator"),

      mongoose = require("mongoose"),
      bcrypt = require("bcrypt");

// SCHEMA
const usersSchema = new mongoose.Schema({
  // First name
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please provide your first name."],
    minlength: [
      2, 
      `Your first name must be at least 2 characters long, got '{VALUE}'.`
    ],
    maxlength: [
      30, 
      `Your first name must not be 30 characters long, got '{VALUE}'.
      `],
    validate: [
      Validator.isAlpha,
      `Your first name should only be in letters.`
    ],
  },

  // Last name
  lastName: {
    type: String,
    trim: true,
    required: [
      function() {
          return this.firstName;
      }, 
        "Please provide your last name."
    ],
    minlength: [
      2, 
      `Your last name must be at least 2 characters long, got '{VALUE}'.`
    ],
    maxlength: [
      30, 
      `Your last name must not be 30 characters long, got '{VALUE}'.`
    ],
    validate: [
      Validator.isAlpha,
      `Your last name should only be in letters.`
    ],
  },

  // Email
  email: {
    type: String,
    required: [
        function() {
          return this.lastName; 
        },
        "Please provide your email.",
    ],
    unique: [
      true, 
      `Your email must be unique, there's already a user with '{VALLUE}'.`
    ],
    lowercase: true,
    validate: [
      Validator.isEmail, 
      "Please provide a valid email."
    ],
  },

  // Phone number
  phoneNumber: {
    type: String,
    required: [
        function() {
          return this.email; 
        },
        "Please provide your phone number.",
    ],
    unique: [
      true, 
      `Your phone number must be unique,there's already a user with '{VALLUE}'.`
    ],
    validate: [
      Validator.isMobilePhone, 
      "Please provide a valid phone number."
    ],
  },

  // Password
  password: {
        type: String,
        required: [
          function() {
            return this.phoneNumber; 
          },
          "Please proide your password.",
        ],
        minlength: [
          8, 
          `Your password should be atleast 8 characters long.`
        ],
        select: false,
  },
  
  // Confirm password
  passwordConfirm: {
    type: String,
    required: [
      function() {
        return this.password; 
      },
      "Please confirm your password.",
    ],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    }
  },

  // Role
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

// password hash
usersSchema.pre("save", async function(next) {
  // run fn is password is modified
  if (!this.isModified("password")) return next
  // hash password with salt of 12
  this.password = await bcrypt.hash(this.password, 12);
  // do not save password confirmation in DB
  this.passwordConfirm = undefined;

  next();
});


// compare passwords instance
usersSchema.methods.comparePassword = async function(
  requestPassword, 
  userPassword) {
  return await bcrypt.compare(requestPassword, userPassword);
};

// MODEL
const User = mongoose.model("User", usersSchema);

module.exports = User;