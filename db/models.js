const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  caption: String,
  images: String,
  price: String,
  Tags: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product,
};
