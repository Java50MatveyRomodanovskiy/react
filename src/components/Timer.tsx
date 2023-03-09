import { type } from "@testing-library/user-event/dist/type";
import timeZones from "../time-zones";
import React, { useEffect } from "react";
type Props = {
    cityCountry: string;
}
export const Timer:React.FC <Props> = ({cityCountry}) => {
    const styles:React.CSSProperties = {background: "lightblue",
    fontSize: "2em"};
    const [time, setTime] = React.useState(new Date());
    function tic(){
       setTime(new Date());
    }
    
        <p>{new Date().toDateString()}</p>
   

    useEffect(() => {
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    },[]);
    let index : number = timeZones.findIndex(e => e.name.includes(cityCountry) || e.countryName.includes(cityCountry) || e.alternativeName.includes(cityCountry));
    index = -1 ? 195 : index;
    return <div id="localTime">
        <h2 id="titleTime">Current time in {cityCountry}</h2>
        <p id="stringTime" style={styles}>{time.toLocaleTimeString(undefined, {timeZone: timeZones[index].name})}</p>
    </div>
}


