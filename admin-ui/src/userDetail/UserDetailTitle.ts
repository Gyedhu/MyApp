import { UserDetail as TUserDetail } from "../api/userDetail/UserDetail";

export const USERDETAIL_TITLE_FIELD = "fullname";

export const UserDetailTitle = (record: TUserDetail): string => {
  return record.fullname || record.id;
};
