import mongoose, { Types, model } from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    recipients: [{type: Types.ObjectId, ref: 'user'}],
    text: String,
    media: Array,
  },
  {
    timestamps: true,
  }
);

export default model("conversation", conversationSchema);
