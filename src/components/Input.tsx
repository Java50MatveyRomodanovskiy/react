import React,{useEffect, useRef, useState} from "react";
import { Alert } from "./Alert";
type Props = {
    submitFn: (value: string) => string;
    placeHolder: string;
    buttonName?: string;
}
export const Input: React.FC<Props> =  ({submitFn, placeHolder, buttonName }) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<string>('');
    
    function inputProcess(){
        const messageNew = submitFn(inputElement.current!.value);
        setMessage(submitFn(inputElement.current!.value));
        if (messageNew === ''){
            inputElement.current!.value = '';
        }
    }
    return <div>
        <input type="text" placeholder={placeHolder} ref = {inputElement}/>
        <button onClick={inputProcess}>{buttonName || "GO"}</button>
        {message && <Alert message={message}/>}
    </div>
}