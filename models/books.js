// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// schema
const booksSchema = new Schema({
  id: 1,
  title: "The Shinobi Initiative",
  description:
    "The reality-bending adventures of a clandestine service agency in the year 2166",
  year: 2014,
  quantity: "10",
  imageURL: "/assets/shinobi-initiative.jpeg",
});

  
module.exports = mongoose.model('Book', booksSchema)