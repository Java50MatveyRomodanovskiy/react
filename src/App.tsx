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
import { Login } from './components/Login';
import { Logout } from './components/Logout';



function App() {
  const authUser = useSelector<any, string>(state=>state.auth.authUser);
  return  <div>
  {!authUser && <Login/>}
  {authUser && < CounterUpdater operand = {10}/>}
  {authUser.includes('admin') &&<CounterMultiply factor= {2}/>}
  {authUser && <CounterSquare />}
  {authUser && <Logout />}
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
 

