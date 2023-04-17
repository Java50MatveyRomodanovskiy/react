import React from "react";
import { useDispatch } from "react-redux";
import { authService, AUTH_USER_ITEM } from "../../config/auth-service-config";
import { LoginData } from "../../model/LoginData";
import { authActions } from "../../redux/authSlice";
import { codeActions } from "../../redux/codeSlice";
import LoginForm from "../forms/LoginForm";
export const Login: React.FC = () => {
    const dispatch = useDispatch();
    async function loginFn(loginData: LoginData){
        try{
            const email: string = await authService.login(loginData);
        localStorage.setItem(AUTH_USER_ITEM, email);
        dispatch(authActions.login(email));
        dispatch(codeActions.set("OK"));
        } catch (error) {
            dispatch(codeActions.set("Wrong Credencials"))
        }
        
        
    }
    return <div>
        <LoginForm submitFn = {loginFn}/>
    </div>
}