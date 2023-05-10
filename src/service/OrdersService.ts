import { Observable } from "rxjs";
import { OrderType } from "../model/OrderType";
import { ShoppingDataType } from "../model/ShoppingDataType";
import { ShoppingProductType } from "../model/ShoppingProductType";

export default interface OrderService {
    addShoppingProduct(collectionName: string, id: string, shoppingProduct: ShoppingProductType): Promise<void>;
    addShoppingProductUnit(collectionName: string, id: string): Promise<void>;
    removeShoppingProduct(collectionName: string, id: string): Promise<void>;
    removeShoppingProductUnit(collectionName: string, id: string): Promise<void>;
    getShoppingCart(collectionName: string): Observable<ShoppingProductType[]>;
    createOrder(email: string, shopping: ShoppingDataType[]): Promise<void>;
    getCustomerOrders(email:string): Observable<OrderType[]>;
    getAllOrders(): Observable<OrderType[]>;
    setOrder(order: OrderType): Promise<void>; 
}