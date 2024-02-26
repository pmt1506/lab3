import Product from "../model/product.js";
import { imageDAO } from "./index.js";

//add product

const addProduct = async ({ name, description, price, category, images }) => {
  try {
    // Assuming you have an array of files in req.files representing the images
    const imagesInfo = [];

    // Create images using the ImageDAO and gather image info
    for (const file of images) {
      const imageId = await imageDAO.createImage({
        url: file.url, // Adjust this based on your image model
        caption: file.caption,
        size: file.size,
      });

      imagesInfo.push({
        imageId,
        caption: file.caption,
        size: file.size,
      });
    }

    // Create the product with the gathered image info
    const newProduct = await Product.create({
      name,
      description,
      price,
      category,
      images: imagesInfo,
    });

    return newProduct;
  } catch (error) {
    throw new Error(error.toString());
  }
};

//list all products

const getAllProducts = async () => {
  try {
    const allProducts = await Product.find();
    return allProducts.map((product) => product._doc);
  } catch (error) {
    throw new Error(error.toString());
  }
};

export default { addProduct, getAllProducts };
