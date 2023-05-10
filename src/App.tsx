import React, { ReactNode, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Customers } from './components/pages/Customers';

import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';
import { Products } from './components/pages/Products';
import { ShoppingCart } from './components/pages/ShoppingCart';
import { routes } from './config/layout-config'

import { NavigatorDesktop } from './components/navigators/NavigatorDesktop';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { productsService } from './config/products-service-config';
import { ProductType } from './model/ProductType';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from './redux/productsSlice';
import { Subscription } from 'rxjs';
import { AUTH_USER_ITEM } from './config/auth-service-config';
import { ordersService } from './config/order-service-config';
import { shoppingActions } from './redux/shoppingSlice';
import { ShoppingProductType } from './model/ShoppingProductType';
import { CategoryType } from './model/CategoryType';
import { categoriesActions } from './redux/categoriesSlice';
import { ordersActions } from './redux/ordersSlice';

function App() {
     const dispatch = useDispatch();
     const authUser = useSelector<any,string>(state=>state.auth.authUser);
     const shopping = useSelector<any,ShoppingProductType[]>(state => state.shoppingState.shopping);
     useEffect(() => {
          const subscription = productsService.getProducts()
          .subscribe({
               next: (products: ProductType[]) => {
                    console.log(products);
                    dispatch(productsActions.setProducts(products))
               }
          })
          return () => subscription.unsubscribe();
     }, []);
     useEffect(() => {
          let subscription: Subscription;
          if (authUser != '' && !authUser.includes("admin")) {
               subscription = ordersService.getShoppingCart(authUser).subscribe ({
                    next: (shopping) => dispatch(shoppingActions.setShopping(shopping))
               })
          } else {
               dispatch(shoppingActions.resetShopping());
          }
          return () => {
               if (subscription) {
                    subscription.unsubscribe();
               }
          }
     }, [authUser]);
     useEffect(() => {
          const subscription = productsService.getCategories()
          .subscribe({
               next: (categories: CategoryType[]) => {
                    console.log(categories);
                    dispatch(categoriesActions.setCategories(categories))
               }
          })
          return () => subscription.unsubscribe();
     }, []);
     useEffect(() => {
          let subscription: Subscription;
          if (authUser) {
               subscription = authUser.includes('admin') ? ordersService.getAllOrders()
               .subscribe({
                    next: (orders) => dispatch(ordersActions.setOrders(orders))
               }) : ordersService.getCustomerOrders(authUser)
               .subscribe({
                    next: (orders) => dispatch(ordersActions.setOrders(orders))
               })
          }
          return () => subscription && subscription.unsubscribe();
     }, [authUser])

     return <BrowserRouter>
          <Routes>
               <Route path='/' element={<NavigatorDesktop routes={routes} />}>
                    <Route path='/login' element={<Login />} />
                    <Route index element={<Home />} />
                    <Route path='customers' element={<Customers />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='shoppingcart' element={<ShoppingCart />} />
                    <Route path='products' element={<Products />} />
                    <Route path='/logout' element={<Logout />} />
               </Route>
               <Route path='/*' element={<NotFound />} />
          </Routes>
     </BrowserRouter>
}

export default App;
