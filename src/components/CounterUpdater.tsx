import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {counterActions } from "../redux/counterSlice";

type Props = {
    operand: number
}
export const CounterUpdater: React.FC<Props> =({operand}) => {
    const userName = useSelector<any, string>(state=>state.login.userName);
    const dispach = useDispatch();
    return<div>
        {userName && <button onClick={() => dispach(counterActions.increment(operand))}>Increment</button>}
        {userName && <button onClick={() => dispach(counterActions.decrement(operand))}>Decrement</button>}
        {(userName === 'admin') && <button onClick={() => dispach(counterActions.reset())}>Reset</button>}
    </div>
}