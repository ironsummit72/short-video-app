import mongoose, { Schema } from "mongoose";
import { PostDBTypes } from "../Types/DB/post_model";
const postSchema = new Schema<PostDBTypes>({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  postVisibility: {
    type: String,
    default: "PUBLIC",
  },
  views: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  filename: {
    type: String,
    required: true,
  },
});
const postModel = mongoose.model("Post", postSchema);
export default postModel;
