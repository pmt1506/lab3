import { categoriesDAO } from "../repository/index.js";

//list all categories

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await categoriesDAO.getAllCategories();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

//create a new category 

const createCategory = async (req, res) => {
  try {
    const result = await categoriesDAO.createCategory(req.body);
    res.status(201).json({
      message: "Created Category",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};

export default {
  getAllCategories,
  createCategory,
};
