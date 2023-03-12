import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputTest } from './components/InputTest';
import { Timer } from './components/Timer';
const initialCity = ['London', 'Vladivostok', 'Toronto', 'Rome']

function App() {
  return  (
    <div id="clock">
    <Timer cityCountry= {initialCity[0]}/>
    <Timer cityCountry={initialCity[1]}/>
    <Timer cityCountry={initialCity[2]}/>
    <Timer cityCountry={initialCity[3]}/>
    {/* <Timer cityCountry='Tokyo'/>
    <Timer cityCountry='Moscow'/>
    <Timer cityCountry='Maldives'/>
    <Timer cityCountry='Jerusalem'/> */}
      </div>
   
 );
}
  
  export default App;
  function checkCity(arg0: string): string {
  throw new Error('Function not implemented.');
}

