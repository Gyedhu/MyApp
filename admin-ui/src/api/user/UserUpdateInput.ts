import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { UserDetailUpdateManyWithoutUsersInput } from "./UserDetailUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  userDetails?: UserDetailUpdateManyWithoutUsersInput;
  username?: string;
};
