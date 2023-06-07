const Product = require("../model/Product.js");

//Get all product
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add new product
const add_product = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    details: req.body.details,
  });
  try {
    const saveProduct = await product.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { product_all, add_product };
