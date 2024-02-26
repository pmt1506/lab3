import { productDAO } from "../repository/index.js";

//add product

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const images = req.body.images.map((file) => ({
      url: file.url,
      caption: file.name,
      size: file.size,
    }));

    const newProduct = await productDAO.addProduct({
      name,
      description,
      price,
      category,
      images,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//list all products

const getAllProducts = async (req, res) => {
  try {
    const products = await productDAO.getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  addProduct,
  getAllProducts,
};
