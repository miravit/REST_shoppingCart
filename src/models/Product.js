const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("Product", productSchema);

// const productSchema = new mongoose.Schema({
//   product: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     default: 1,
//   },
// });

// module.exports = mongoose.model("Product", productSchema);
