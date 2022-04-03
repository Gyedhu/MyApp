import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailUpdateInput = {
  fullname?: string;
  job?: string;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
};
