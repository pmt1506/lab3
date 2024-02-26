import Comment from "../model/comment.js";

const createComment = async (text) => {
  try {
    const authorID = "65dc79907bbf131e58e5ae60";

    const newComment = await Comment.create({
      text,
      rate: 5,
      author: authorID,
    });
    return newComment;
  } catch (error) {
    throw new Error(error.toString());
  }
};



export default { createComment };
