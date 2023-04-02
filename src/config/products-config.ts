import { RouteType } from "../model/RouteType";

export const routesProduct: RouteType[] = [
    
    {path: '/products/dairy', label: 'Dairy Products', admin: true, authenticated: true, no_authenticated: true },
    {path: '/products/bread', label: 'Bread Products', admin: true, authenticated: true, no_authenticated: true },
]