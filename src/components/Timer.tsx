import { InputTest } from './InputTest';
import timeZones from "../time-zones";
import React, { useEffect, useRef } from "react";
type Props = {
    cityCountry: string;
}
export const Timer:React.FC <Props> = ({cityCountry}) => {
    const styles:React.CSSProperties = {background: "lightblue",
    fontSize: "2em"};
    const [inputValue, setInputValue] = React.useState<string>(cityCountry);
    const [time, setTime] = React.useState(new Date());
    const timeZone = useRef<string | undefined>();
    function tic(){
       setTime(new Date());
    }
        <p>{new Date().toDateString()}</p>
    
    useEffect(() => {
       timeZone.current = getTimeZone();
    }, [inputValue]
    );

    useEffect(() => {
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    },[]);
    
    function getTimeZone(): string | undefined {
        let index : number = timeZones.findIndex(tz => JSON.stringify(tz).includes(cityCountry));
        index = (index === -1) ? 195 : index;
        return timeZones[index].name;
    }
    
    return <div id="localTime">
        <h2 id="titleTime">Current time in {inputValue}</h2>
        <InputTest cityCountry={inputValue} setInputValue={setInputValue}/>
        <p id="stringTime" style={styles}>{time.toLocaleTimeString(undefined, {timeZone: timeZone.current})}</p>
    </div>
}


