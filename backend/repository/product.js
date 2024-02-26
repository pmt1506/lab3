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
        url: file.url,
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
    const allProducts = await Product.find().populate("category").exec();
    return allProducts.map((product) => product._doc);
  } catch (error) {
    throw new Error(error.toString());
  }
};

// get product detail

const getProductDetail = async (id) => {
  try {
    const product = await Product.findById(id).populate("category").exec();
    return product._doc;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const addCommentToProduct = async (pid, comment) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      pid,
      {
        $push: { comments: comment },
      },
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw new Error(error.toString());
  }
};


//delete product and its image

export default { addProduct, getAllProducts, getProductDetail, addCommentToProduct };
