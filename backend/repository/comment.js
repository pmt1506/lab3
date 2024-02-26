import Comment from "../model/comment.js";

const createComment = async (text) => {
  try {
    const newComment = await Comment.create({
      text,
      rate: 5,
      author: "Pham Minh Tien",
    });
    return newComment;
  } catch (error) {
    throw new Error(error.toString());
  }
};



export default { createComment };
