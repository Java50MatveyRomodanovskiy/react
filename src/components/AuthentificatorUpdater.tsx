import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { authentificationActions } from "../redux/authentificationSlice";
import {useSelector} from 'react-redux';
export const AuthentificatorUpdater: React.FC<any> = () => {
    const userName = useSelector<any, string>(state=>state.login.userName);
    const dispach = useDispatch();
    const inputElement = useRef<HTMLInputElement>(null);
    return<div>
      {!userName && <input placeholder="Input login" type="text" required  ref={inputElement}/>}
      {!userName &&  <button onClick={() => dispach(authentificationActions.login(inputElement.current!.value))}>login</button>}
      {userName && <button onClick={() => dispach(authentificationActions.logout())}>logout</button>}
    </div>
}