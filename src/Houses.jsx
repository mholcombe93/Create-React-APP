import React, { useState } from "react";
import { useEffect } from "react";
import Modal from './Modal.jsx'
import App from "./App.css"
// import HouseComp from "./HouseComp.jsx"
// import Trait from "./Trait"

let headers = new Headers({ Accept: "application/json" });
const url = "https://wizard-world-api.herokuapp.com/Houses/";

function Houses() {
  const [house, setHouse] = useState([]);
  const [counter, setCounter] = useState(0)
  const [showModal, setShowModal] = useState(false)  

  //--------------------------------- Fetch --------------------------------------
  const fetchHouses = async () => {
    try {
      const response = await fetch(url, { method: "GET", headers: headers });
      const house = await response.json();
      setHouse(house);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  useEffect(() => {fetchHouses()}, []) // makes componeents render AFTER api is called


  return (
    <div>
      <img src = "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/" className="Gryf_Butt" onClick={() => {
          setCounter(0)
          setShowModal(true)
          }}/> 
      <img src = "https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/" className="Rav_Butt" onClick={() => {
          setCounter(1)
          setShowModal(true)
          }}/>
      <img src = "https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/" className="Huff_Butt" onClick={() => {
          setCounter(2)
          setShowModal(true)
          }}/>
      <img src = "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/" className="Sly_Butt" onClick={() => {
          setCounter(3)
          setShowModal(true)
          }}/> 
     
        {showModal === true && <Modal 
          setShowModal={setShowModal}
          name={house[counter].name}
          founder={house[counter].founder}
          houseColours={house[counter].houseColours}
          ghost={house[counter].ghost}
          traits={house[counter].traits.map((trait) => trait.name)}
        />}

    </div>
  );
}

export default Houses;
