import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name: string;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
