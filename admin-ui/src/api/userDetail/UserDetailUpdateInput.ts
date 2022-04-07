import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailUpdateInput = {
  age?: number | null;
  fullname?: string;
  job?: string;
  phone?: string | null;
  user?: UserWhereUniqueInput;
};
