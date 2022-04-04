import { Order } from "../order/Order";
import { Post } from "../post/Post";
import { UserDetail } from "../userDetail/UserDetail";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  posts?: Array<Post>;
  roles: Array<string>;
  updatedAt: Date;
  userDetail?: UserDetail | null;
  username: string;
};
