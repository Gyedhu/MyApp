import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string;
  orders?: OrderUpdateManyWithoutProductsInput;
};
