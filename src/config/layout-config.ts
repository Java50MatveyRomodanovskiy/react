import { RouteType } from "../model/RouteType";

export const routes: RouteType[] = [
    {path: '/login',label:"Login", admin: false, authenticated: false, no_authenticated: true },
    {path: '/', label: 'Home', admin: true, authenticated: true, no_authenticated: false },
    {path: '/customers', label: 'Customers', admin: true, authenticated: false, no_authenticated: false },
    {path: '/shoppingcart', label: 'Shopping Cart', admin: true, authenticated: true, no_authenticated: false },
    {path: '/orders', label: 'Orders', admin: true, authenticated: true, no_authenticated: false },
    {path: '/products', label: 'Products', admin: true, authenticated: true, no_authenticated: true },
    {path: '/logout',label:"Logout" , admin: true, authenticated: true, no_authenticated: false }
]