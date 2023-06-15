import mongoose, { Types, model } from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    tag: Object,
    reply: Types.ObjectId,
    likes: [{ type: Types.ObjectId, ref: "user" }],
    user: { type: Types.ObjectId, ref: "user" },
    postId: Types.ObjectId,
    postUserId: Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

export default model("comment", commentSchema);
