import { UserUpdateManyWithoutUserDetailsInput } from "./UserUpdateManyWithoutUserDetailsInput";

export type UserDetailUpdateInput = {
  fullname?: string;
  job?: string;
  phone?: string | null;
  users?: UserUpdateManyWithoutUserDetailsInput;
};
