import React, { useState } from "react";
import { useEffect } from "react";
import HouseComp from "./HouseComp.jsx"
import Trait from "./Trait"

let headers = new Headers({ Accept: "application/json" });
const url = "https://wizard-world-api.herokuapp.com/Houses/";

function Houses() {
  const [house, setHouse] = useState([]);
  const [counter, setCounter] = useState(0)

  
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
  
  useEffect(() => {fetchHouses()}, [])


  return (
    <div>
      <button className="Gryf_Butt" onClick={() => setCounter(0)}> Gryff </button>
      <button className="Rav_Butt" onClick={() => setCounter(1)}> Rav </button>
      <button className="Huff_Butt" onClick={() => setCounter(2)}> Huff </button>
      <button className="Sly_Butt" onClick={() => setCounter(3)}> Sly </button>
     
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
           {/* <button onClick={decrementTen}disabled={count ===0}>Gryf</button> */}
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
