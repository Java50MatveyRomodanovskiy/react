import React from "react";
import { useDispatch } from "react-redux";
import { LoginData } from "../../model/LoginData";
import { authActions } from "../../redux/authSlice";
import LoginForm from "../forms/LoginForm";
export const Login: React.FC = () => {
    const dispatch = useDispatch();
    return <div>
        <LoginForm submitFn = {function(loginData: LoginData): void {dispatch(authActions.login(loginData.email));}
        }/>
    </div>
}