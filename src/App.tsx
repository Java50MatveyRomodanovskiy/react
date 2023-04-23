import React, { ReactNode, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Bread } from './components/pages/Bread';
import { Customers } from './components/pages/Customers';
import { Dairy } from './components/pages/Dairy';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';
import { Products } from './components/pages/Products';
import { ShoppingCart } from './components/pages/ShoppingCart';
import { routes } from './config/layout-config'
import { Navigator } from './components/navigators/Navigator';
import { routesProduct } from './config/products-config';
import { NavigatorDesktop } from './components/navigators/NavigatorDesktop';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { productsService } from './config/products-service-config';
import { ProductType } from './model/ProductType';
import { useDispatch } from 'react-redux';
import { productsActions } from './redux/productsSlice';

function App() {
     const dispatch = useDispatch();
     useEffect(() => {
          const subscription = productsService.getProducts()
          .subscribe({
               next: (products: ProductType[]) => {
                    console.log(products);
                    dispatch(productsActions.setProducts(products))
               }
          })
          return () => subscription.unsubscribe();
     })
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
