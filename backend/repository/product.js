import Product from "../models/product.js";
//add product

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

//get product detail

const getProductDetail = async (id) => {
  try {
    const product = await Product.findById(id);
    return product._doc;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export default { addProduct, getProductDetail };
