import { RouteType } from "../model/RouteType";

export const routes: RouteType[] = [
    {path: '/login',label:"Login" },
    {path: '/', label: 'Home'},
    {path: '/customers', label: 'Customers'},
    {path: '/shoppingcart', label: 'Shopping Cart'},
    {path: '/orders', label: 'Orders'},
    {path: '/products', label: 'Products'},
    {path: '/logout',label:"Logout" }
]