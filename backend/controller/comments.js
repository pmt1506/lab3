import { commentDAO, productDAO } from "../repository/index.js";

const createComment = async (req, res) => {
  const { text, pid } = req.body;

  try {
    const product = await productDAO.getProductDetail(pid);
    if (!product) {
      return;
    }
    const result = await commentDAO.createComment(text);
    const newProduct = await productDAO.addCommentToProduct(pid, result);
    res.status(201).json({
      message: "Created Comment",
      newProduct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};

export default { createComment };
