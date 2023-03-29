import { NavLink, Outlet } from "react-router-dom"
import './navigators.css'
export const Navigator: React.FC = () => {
    return <div>
        <nav> <Outlet />
            <ul className="navigator-list">
                <li className="navigator-item">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to='/orders'>Orders</NavLink>
                </li> 
                <li className="navigator-item">
                    <NavLink to='/customers'>Customers</NavLink>
                </li> 
                <li className="navigator-item">
                    <NavLink to='/shoppingcart'>ShoppingCart</NavLink>
                </li> 
                <li className="navigator-item">
                    <NavLink to='/products'>Products</NavLink>
                </li>
               
            </ul>         
                <ul className="navigator-list navigator-sublist">              
                    <li className="navigator-item">
                        <NavLink to='/products/dairy'>Dairy Products</NavLink>
                    </li>
                    <li className="navigator-item">
                        <NavLink to='/products/bread'>Bread Products</NavLink>
                    </li> 
                </ul>
            </nav>          
    </div>
}