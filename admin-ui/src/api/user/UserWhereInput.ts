import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  posts?: PostListRelationFilter;
  userDetail?: UserDetailWhereUniqueInput;
  username?: StringFilter;
};
