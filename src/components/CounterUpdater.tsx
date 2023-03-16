import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {counterActions } from "../redux/counterSlice";

type Props = {
    operand: number
}
export const CounterUpdater: React.FC<Props> =({operand}) => {
    const dispach = useDispatch();
    return<div>
        { <button onClick={() => dispach(counterActions.increment(operand))}>Increment</button>}
        { <button onClick={() => dispach(counterActions.decrement(operand))}>Decrement</button>}
        {<button onClick={() => dispach(counterActions.reset())}>Reset</button>}
    </div>
}