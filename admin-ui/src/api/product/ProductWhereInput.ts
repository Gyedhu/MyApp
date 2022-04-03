import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
};
