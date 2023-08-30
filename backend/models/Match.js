//import mongoose
const mongoose = require("mongoose");

let matchSchema = mongoose.Schema({
  teamOne: String,
  scoreOne: Number,
  teamTwo: String,
  scoreTwo: Number
});

const match = mongoose.model("Match", matchSchema);
//export match
module.exports = match;