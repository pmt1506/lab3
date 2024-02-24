import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    text: {
      type: String,
      require: true,
    },
    rate: {
      type: Number,
      require: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "accounts",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comments", commentSchema);

export default Comment;
