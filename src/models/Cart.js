const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  cart: {
    type: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, //vilken product
        quantity: Number,
      },
    ],
    default: [],
  },
  totalAmount: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
