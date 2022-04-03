import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { UserDetailCreateNestedManyWithoutUsersInput } from "./UserDetailCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  userDetails?: UserDetailCreateNestedManyWithoutUsersInput;
  username: string;
};
