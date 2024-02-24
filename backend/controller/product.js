import { productDAO } from "../repository/index.js";

//add product

const addProduct = async (req, res) => {
  try {
    const product = await productDAO.addProduct(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

//get product details

const getProduct = async (req, res) => {
  try {
    const product = await productDAO.getProduct(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

export default { addProduct, getProduct };
