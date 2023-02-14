const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
