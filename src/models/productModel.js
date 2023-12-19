const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    discountPercentage: String,
    price: String,
    salePrice: String,
  },
  { collection: "Produtcs", timestamps: true }
);

const Produtcs = mongoose.model("Products", productSchema);

module.exports = Produtcs;
