import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
