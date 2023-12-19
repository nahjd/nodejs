const Product = require("./../models/productModel");

const getAllProduct = async (req, res) => {
  let allProduct = await Product.find({});
  res.send(allProduct);
};

module.exports = { getAllProduct };
