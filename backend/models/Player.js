const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  img: String,
  name: String,
  age: Number,
  position: String,
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;
