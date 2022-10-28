import React, { useState } from 'react';
import Houses from './Houses';

function App() {

  return (
    <div className ="App_Body"> 
    <div className ="App">
        <h1> Harry Potter Houses API </h1>
        <p> Click the cresets to learn more about each Harry Potter House.</p>
       <Houses />
      </div>
  </div>
  );
}

export default App;


