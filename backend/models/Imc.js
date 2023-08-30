const mongoose = require("mongoose");

const imcSchema = mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  imcCalcul: Number
});

const imc = mongoose.model("Imc", imcSchema);
module.exports = imc;