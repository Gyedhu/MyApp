import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { UserDetailUpdateManyWithoutUsersInput } from "./UserDetailUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  userDetails?: UserDetailUpdateManyWithoutUsersInput;
  username?: string;
};
