import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { UserDetailListRelationFilter } from "../userDetail/UserDetailListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  posts?: PostListRelationFilter;
  userDetails?: UserDetailListRelationFilter;
  username?: StringFilter;
};
