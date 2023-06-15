import mongoose, { Types, model } from "mongoose";
const { Schema } = mongoose;


const postSchema = new Schema(
  {
    content: String,
    images: {
      type: Array,
      required: true,
    },
    likes: [
      {
        type: Types.ObjectId,
        ref: "user",
      },
    ],
    comments: [
      {
        type: Types.ObjectId,
        ref: "comment",
      },
    ],
    user: {
      type: Types.ObjectId,
      ref: "user",
    },
    reports: [
      {
        type: Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);


export default model('post', postSchema);