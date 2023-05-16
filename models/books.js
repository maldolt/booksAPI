// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// schema
const bookSchema = new Schema({
  title: String,
  description: String,
  year: Number,
  quantity: Number,
  imageURL: String
})

  
module.exports = mongoose.model('Book', bookSchema)
