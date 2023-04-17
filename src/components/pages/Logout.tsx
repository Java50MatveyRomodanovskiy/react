import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authService, AUTH_USER_ITEM } from "../../config/auth-service-config";
import { LoginData } from "../../model/LoginData";
import { authActions } from "../../redux/authSlice";
export const Logout: React.FC = () => {
    const authUser = useSelector<any, string>(state=>state.auth.authUser)
    const dispatch = useDispatch();
    async function  logoutFn() {
        await authService.logout();
        localStorage.setItem(AUTH_USER_ITEM, '');
        dispatch(authActions.logout());
    }
    return <div>
        <button onClick={logoutFn}>Logout {authUser}</button>
    </div>
}