import { Post } from "../post/Post";

export type Comment = {
  author: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  text: string | null;
  updatedAt: Date;
  upvotes: number | null;
};
