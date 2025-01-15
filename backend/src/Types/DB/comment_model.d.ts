import mongoose from "mongoose";
export interface CommentDBTypes {
  user: mongoose.Types.ObjectId;
  postId:mongoose.Types.ObjectId
  message: string;
  replies: [
    {
      user: mongoose.Types.ObjectId;
      message: string;
    }
  ];
}
