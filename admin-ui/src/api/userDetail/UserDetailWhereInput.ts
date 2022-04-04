import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailWhereInput = {
  fullname?: StringFilter;
  id?: StringFilter;
  job?: StringFilter;
  phone?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
