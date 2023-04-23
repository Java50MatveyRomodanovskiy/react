import { useSelect } from "@mui/base"
import { useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { ProductsAdmin } from "./ProductsAdmin";
import { ProductsClient } from "./ProductsClient";

export const Products: React.FC = () => {
    const authUser = useSelector<any, string>(state => state.auth.authUser);
    return  authUser == '' || !authUser.includes("admin") ? <ProductsClient /> : <ProductsAdmin />
}