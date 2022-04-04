import { User } from "../user/User";

export type UserDetail = {
  createdAt: Date;
  fullname: string;
  id: string;
  job: string;
  phone: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
