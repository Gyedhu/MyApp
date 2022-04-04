import { UserCreateNestedManyWithoutUserDetailsInput } from "./UserCreateNestedManyWithoutUserDetailsInput";

export type UserDetailCreateInput = {
  fullname: string;
  job: string;
  phone?: string | null;
  users?: UserCreateNestedManyWithoutUserDetailsInput;
};
