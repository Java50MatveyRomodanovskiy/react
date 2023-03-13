import React, { useState } from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

type Props = {
    cityCountry: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
export const InputTest: React.FC  <Props> = ({cityCountry, setInputValue}) =>  {
    function submit(value: string): string {
        let res ='';
        let index : number = timeZones.findIndex(tz => JSON.stringify(tz).includes(value));
        if (index === -1){
            res = "Unfortunately, I don't know such city"
        }
        else{setInputValue(value);}
        return res;
    }
    return <div>
        <Input submitFn={submit} placeHolder={"or input your city"}/>
    </div>
}