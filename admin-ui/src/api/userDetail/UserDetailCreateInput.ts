import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailCreateInput = {
  age?: number | null;
  fullname: string;
  job: string;
  phone?: string | null;
  user: UserWhereUniqueInput;
};
