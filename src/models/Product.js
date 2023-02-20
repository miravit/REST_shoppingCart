const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("Product", productSchema);
