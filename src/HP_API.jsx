import React, { useState } from "react";
import { useEffect } from "react";
import HouseComp from "./HouseComp.jsx"
import Trait from "./Trait"
import Modal from './Modal'

let headers = new Headers({ Accept: "application/json" });
const url = "https://wizard-world-api.herokuapp.com/Houses/";

function Houses() {
  const [house, setHouse] = useState([]);
  const [counter, setCounter] = useState(0)
  const [show, setShow] =useState(true)

  
  const fetchHouses = async () => {
    try {
      const response = await fetch(url, { method: "GET", headers: headers });
      const house = await response.json();
      console.log(house);
      setHouse(house);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  useEffect(() => {fetchHouses()}, []) // only do fetch when the component mounts, prevent infin loops

  return (
    <div>
      <img src ="https://m.media-amazon.com/images/I/71qheAe+f6L._AC_SX679_.jpg" className="Gryf_Butt" onClick={() => setCounter(0)}/>
      <img src="https://m.media-amazon.com/images/I/61iys32RuAL._AC_SX679_.jpg" className="Rav_Butt" onClick={() => setCounter(1)}/> 
      <img src= "https://img.fruugo.com/product/0/50/46790500_max.jpg" className="Huff_Butt" onClick={() => setCounter(2)}/> 
      <img src="https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SX679_.jpg" className="Sly_Butt" onClick={() => setCounter(3)}/>
     
      <div className="Text"></div>
      { house.length > 0 &&
        <HouseComp
          name={house[counter].name}
          founder={house[counter].founder}
          houseColours={house[counter].houseColours}
          ghost={house[counter].ghost}
          traits={house[counter].traits.map((trait) => trait.name)}
        />
      }
  
      <Modal onClose={() => setShow(false)} show={show} house={house} />

       <button onClick ={() => setShow(true)}> Show Modal</button>
    </div>
  );
}

export default Houses;

// import  axios  from "axios";

// function App(){
//   const [house, setHouse] = useState("")
//   const getHouse = () => {
//     axios.get("https://wizard-world-api.herokuapp.com/Houses/")
//       .then((response) => {
//         console.log(response);
//
//       })
//   }
//   return <div>
//     <button onClick={getHouse}> Get House </button>
//     {house}
//   </div>

// }
