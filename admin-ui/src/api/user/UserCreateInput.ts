import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { UserDetailCreateNestedManyWithoutUsersInput } from "./UserDetailCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  userDetails?: UserDetailCreateNestedManyWithoutUsersInput;
  username: string;
};
