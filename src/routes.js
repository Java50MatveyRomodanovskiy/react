import { Bread } from './components/pages/Bread';
import { Customers } from './components/pages/Customers';
import { Dairy } from './components/pages/Dairy';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';
import { ShoppingCart } from './components/pages/ShoppingCart';
import { Navigator } from './components/navigators/Navigator';
import { useRoutes } from 'react-router-dom';

export default function Router() {

    let element = useRoutes([
        {   element: <Navigator />,
            children: [
                { path: '/', element: <Home /> },
                { path: 'customers', element: <Customers /> },
                { path: 'orders', element: <Orders /> },
                { path: 'shoppingcart', element: <ShoppingCart /> },
                {
                    path: 'products', 
                    children: [
                        { path: 'dairy', element: <Dairy /> },
                        { path: 'bread', element: <Bread /> },
                    ]
                },
                { path: '*', element: <NotFound /> }
            ]
        }
    ])
    return element;
}