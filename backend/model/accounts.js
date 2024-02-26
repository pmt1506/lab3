import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("accounts", accountSchema);

export default Account;