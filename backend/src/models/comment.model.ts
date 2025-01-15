import mongoose, { Schema } from "mongoose";
import { CommentDBTypes } from "../Types/DB/comment_model";

const commentSchema = new Schema<CommentDBTypes>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  message: {
    type: String,
    required: true,
  },
  replies: [
    {
      user: mongoose.Schema.Types.ObjectId,
      message: String,
    },
  ],
});
const commentModel = mongoose.model("Comment", commentSchema);
