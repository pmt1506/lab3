import mongoose, { Schema } from "mongoose";
import { imageSchema } from "./image.js";
import { commentSchema } from "./comment.js";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    images: [imageSchema],
    comments: [commentSchema],
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

export default Product;
