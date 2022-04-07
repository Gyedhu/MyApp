import { User } from "../user/User";

export type UserDetail = {
  age: number | null;
  createdAt: Date;
  fullname: string;
  id: string;
  job: string;
  phone: string | null;
  updatedAt: Date;
  user?: User;
};
