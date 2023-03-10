import { type } from "@testing-library/user-event/dist/type";
import timeZones from "../time-zones";
import React, { useEffect, useRef } from "react";
type Props = {
    cityCountry: string;
}
export const Timer:React.FC <Props> = ({cityCountry}) => {
    const styles:React.CSSProperties = {background: "lightblue",
    fontSize: "2em"};
    const [time, setTime] = React.useState(new Date());
    const timeZone = useRef<string | undefined>();
    function tic(){
       setTime(new Date());
    }
    
        <p>{new Date().toDateString()}</p>
    
    useEffect(() => {
       timeZone.current = getTimeZone();
    }, [cityCountry]
    );

    useEffect(() => {
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    },[]);
    
    function getTimeZone(): string | undefined {
        let index : number = timeZones.findIndex(e => e.name.includes(cityCountry) || e.countryName.includes(cityCountry) 
        || e.alternativeName.includes(cityCountry));
        index = (index === -1) ? 195 : index;
        return timeZones[index].name;
    }
    
    return <div id="localTime">
        <h2 id="titleTime">Current time in {cityCountry}</h2>
        <p id="stringTime" style={styles}>{time.toLocaleTimeString(undefined, {timeZone: timeZone.current})}</p>
    </div>
}


