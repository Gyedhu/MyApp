import { SortOrder } from "../../util/SortOrder";

export type UserDetailOrderByInput = {
  createdAt?: SortOrder;
  fullname?: SortOrder;
  id?: SortOrder;
  job?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
