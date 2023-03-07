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
    <Timer cityCountry='Israel'/>
      </div>
    
  );
}

export default App;
