import Categories from "../model/categories.js";

//list all categories

const getAllCategories = async () => {
  try {
    const allCategories = await Categories.find();
    return allCategories.map((category) => category._doc);
  } catch (error) {
    throw new Error(error.toString());
  }
};

//create a new category

const createCategory = async ({ name, desc }) => {
  try {
    const newCategory = await Categories.create({ name, desc });
    return newCategory._doc;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export default {
  getAllCategories,
  createCategory,
};
