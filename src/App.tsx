import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import { InputTest } from './components/InputTest';
// import { Timer } from './components/Timer';
import { CounterUpdater } from './components/CounterUpdater';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import{AuthentificatorUpdater} from './components/AuthentificatorUpdater';
import { useSelector } from 'react-redux';



function App() {
  const userName = useSelector<any, string>(state=>state.login.userName);
  return  <div>
  <AuthentificatorUpdater/>
 {userName && < CounterUpdater operand = {10}/>}
 {userName ==='admin' &&<CounterMultiply factor= {2}/>}
 {userName && <CounterSquare />}
  </div>
 
  //   <div id="clock">
  //     <div id="clock-block">
  //   <Timer cityCountry= {initialCity[0]}/>
  //   <Timer cityCountry={initialCity[1]}/>
  //   </div>
  //   <div id="clock-block">
  //   <Timer cityCountry={initialCity[2]}/>
  //   <Timer cityCountry={initialCity[3]}/>
  //   </div>
  //   {/* <Timer cityCountry='Tokyo'/>
  //   <Timer cityCountry='Moscow'/>
  //   <Timer cityCountry='Maldives'/>
  //   <Timer cityCountry='Jerusalem'/> */}
  //     </div>
   
 ;
}
  
  export default App;
 

