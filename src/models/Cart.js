const mongoose = require("mongoose");

// const cartSchema1 = new mongoose.Schema({
//   cart: {
//     type: [
//       {
//         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, //vilken product
//         quantity: Number,
//       },
//     ],
//     default: [],
//   },
//   totalAmount: {
//     type: Number,
//     require: true,
//     default: 0,
//   },
// });
const cartSchema = new mongoose.Schema({
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      product: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model("Cart", cartSchema);
