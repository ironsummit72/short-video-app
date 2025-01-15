import mongoose from "mongoose";
export interface PostDBTypes {
  owner: mongoose.Types.ObjectId;
  title: string;
  description: string;
  likes: [];
  views: [];
  comments: [];
  postVisibility: "PUBLIC" | "PRIVATE";
  filename:string
}
