import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  text?: StringNullableFilter;
  upvotes?: IntNullableFilter;
};
