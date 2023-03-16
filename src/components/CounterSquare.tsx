import React from "react";
import {useSelector} from 'react-redux';

export const CounterSquare: React.FC<any> = () => {
    const counter = useSelector<any, number>(state=>state.count.counter);
    return <>
        {<p>Counter value is {counter}, counter ** 2 = {counter ** 2}</p>}
    </>

}