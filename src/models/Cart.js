const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      product: { type: String, required: true },
      price: { type: Number, required: true },
      // quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Cart", cartSchema);
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
