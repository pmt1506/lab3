import mongoose, { Schema } from "mongoose";

const imageSchema = new Schema(
  {
    url: {
      type: String,
      require: true,
    },
    caption: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);

export default Image;
