import { iProduct } from "./iProduct";

export interface iCartItem extends iProduct {
  quantity: number;
}
