import { ReactNode, useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { RouteType } from "../../model/RouteType"
import './navigators.css'
type Props = {
    subnav?: boolean,
    routes: RouteType[]
}
export const Navigator: React.FC<Props> = ({ subnav, routes }) => {
    const navigate = useNavigate();
    const authUser = useSelector<any,string>(state=>state.auth.authUser);
    useEffect(() => {
         if (!subnav){
            let i = (authUser === '') ? 0 : 1;
            navigate(routes[i].path)
        }
         }, [])
    function getItems(): ReactNode {
        return routes.map((route, index) =>
            <li className="navigator-item" key={index}>
                <NavLink to={route.path}>{route.label}
                </NavLink></li>)
    }
    return <div style={{marginTop:"10vh"}}>
        <nav>
          <ul className={`navigator-list ${subnav ? 'navigator-sublist' : ''}`}>
            {getItems()}
        </ul>  
        </nav>
        
        <Outlet></Outlet>
    </div>
}