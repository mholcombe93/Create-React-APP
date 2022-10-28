import React, { useState } from 'react';
import Houses from './HP_API';
// import Modal from "./Modal"



function App() {
// const [show, setShow] =useState(false)

  return (
    <div className ="App">
      <h1> Harry Potter Houses API </h1>
       <Houses />
       {/* <Modal onClose={() => setShow(false)} show={show} /> */}

      {/* <button onClick ={() => setShow(true)}> Show Modal</button> */}
      </div>
  );
}

export default App;


