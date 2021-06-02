const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema({
  num: Number,
  viewers: [String],
  date: { type: String, default: Date.now },
});

mongoose.set("useFindAndModify", false);

module.exports = mongoose.model("Comic", comicSchema);
