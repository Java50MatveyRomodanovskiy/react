import { AppBar, Box, Tabs, Tab } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { ReactNode, useEffect } from "react";
import { RouteType } from "../../model/RouteType";
import { useSelector } from "react-redux/es/hooks/useSelector";
export type Props = {
    subnav?: boolean,
    routes: RouteType[]
}
export const NavigatorDesktop: React.FC<Props> = ({subnav, routes}) => {
    const authUser = useSelector<any,string>(state=>state.auth.authUser);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const activeRoutes = getSecRoutes();
    useEffect(() => {
         if (!subnav){
          navigate(activeRoutes[0].path)
        }
         }, [authUser])
    const handleChange = (event: any, newValue: number) => {
      setValue(newValue);
    };
    function getSecRoutes(): RouteType[]{
      let newRoutes: RouteType[] = [];
      if (authUser === '') {
          newRoutes = [routes[0],routes[5]];          
      } else if (authUser.toLowerCase().includes('admin')){
       newRoutes = routes.slice(1); 
      } else {    
          newRoutes = [routes[1], ...routes.slice(3,routes.length)]
      }
          return newRoutes;
  }
  function getTabs(): ReactNode {
    return activeRoutes.map((route, index) => <Tab key={index} component={Link}
     to={route.path} label={route.label}/>
    
    )
  }
 return <Box sx={{marginTop: "10vh"}}>
    <AppBar sx={{backgroundColor: "lightgray"}}>
        <Tabs value={value} onChange={handleChange}>
            {getTabs()}
        </Tabs>
    </AppBar>
    <Outlet></Outlet>
 </Box>
}