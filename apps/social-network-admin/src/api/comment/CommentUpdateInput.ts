import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  post?: PostWhereUniqueInput | null;
  text?: string | null;
  upvotes?: number | null;
};
