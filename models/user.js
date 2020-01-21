let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    userName: String,
    address: String
})

module.exports = mongoose.model("User", userSchema);