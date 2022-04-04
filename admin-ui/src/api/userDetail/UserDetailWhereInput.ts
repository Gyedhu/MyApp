import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UserDetailWhereInput = {
  fullname?: StringFilter;
  id?: StringFilter;
  job?: StringFilter;
  phone?: StringNullableFilter;
  users?: UserListRelationFilter;
};
