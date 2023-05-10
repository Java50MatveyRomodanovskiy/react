import { ShoppingDataType } from "./ShoppingDataType";

export type OrderType = {
    id: string;
    email: string;
    orderDate: Date;
    deliveryDate: Date | string;
    shopping: ShoppingDataType[];

}