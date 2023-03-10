import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  return (
      <div id="clock">
    <Timer cityCountry='London'/>
    <Timer cityCountry='Vladivostok'/>
    <Timer cityCountry='Toronto'/>
    <Timer cityCountry='Rome'/>
    <Timer cityCountry='Tokyo'/>
    <Timer cityCountry='Moscow'/>
    <Timer cityCountry='Maldives'/>
    <Timer cityCountry='Jerusalem'/>
      </div>
    
  );
}

export default App;
