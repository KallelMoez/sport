const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  img: String,
  name: String,
  owner: String,
  stadium: String,
});

const team = mongoose.model("Team", teamSchema);
module.exports = team;
