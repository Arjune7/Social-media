import mongoose, { Types, model } from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    conversation: { type: Types.ObjectId, ref: "conversation" },
    sender: { type: Types.ObjectId, ref: "user" },
    recipient: { type: Types.ObjectId, ref: "user" },
    text: String,
    media: Array,
  },
  {
    timestamps: true,
  }
);

export default model("message", messageSchema);
