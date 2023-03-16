import React from "react";
import {useSelector} from 'react-redux';
type Props = {
    factor : number
}
export const CounterMultiply: React.FC<Props> = ({factor}) => {
    const counter = useSelector<any, number>(state=>state.count.counter);
    return  <>{ <p>Counter value is {counter}, factor is {factor}, counter * factor = {counter * factor}</p>}</>
    

}