const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  
  userName: { type: String, required: true },
  gameHighScore: { type: Number, required: false },
  highScore: { type: Number, required: false},
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const gameData = mongoose.model("Gamedata", gameSchema);

module.exports = gameData;
