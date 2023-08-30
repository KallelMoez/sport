//import mongoose
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String,
          unique: true},
  pwd: String,
  tel: String,
  role: String,
  avatar: String
});

const user = mongoose.model("User", userSchema);
userSchema.plugin(uniqueValidator);
//export user
module.exports = user;