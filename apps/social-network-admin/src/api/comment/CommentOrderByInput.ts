import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  upvotes?: SortOrder;
};
