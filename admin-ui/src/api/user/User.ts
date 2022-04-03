import { Order } from "../order/Order";
import { UserDetail } from "../userDetail/UserDetail";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  roles: Array<string>;
  updatedAt: Date;
  userDetails?: Array<UserDetail>;
  username: string;
};
