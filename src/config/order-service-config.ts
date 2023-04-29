import OrderService from "../service/OrdersService";
import OrdersServiceFirebase from "../service/OrdersServiceFirebase";

export const ordersService: OrderService = new OrdersServiceFirebase();