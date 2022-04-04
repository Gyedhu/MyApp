import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailCreateInput = {
  fullname: string;
  job: string;
  phone?: string | null;
  user: UserWhereUniqueInput;
};
