const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produtSchema = new Schema({
  productId: String,
  productIdName: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Good', produtSchema);
