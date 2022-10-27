import React, { useState } from "react";
import HouseComp from "./HouseComp"

let headers = new Headers({ Accept: "application/json" });
const url = "https://wizard-world-api.herokuapp.com/Houses/";

function Houses() {
  const [house, setHouse] = useState([]);
  const handleClick = () => fetchHouses();

  let houseArr = [];
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

  return (
    <div>
      <div className="Text"></div>
      <button className="Button" onClick={handleClick}>
        Here is a House
      </button>
      <ul>{
        house.map((house, index) => {
          return (
            <HouseComp key={index}
             name = {house.name}
              founder = {house.founder}
             houseColours =  {house.houseColours}
             ghost = {house.ghost}
             traits = {house.traits.map((trait) => trait.name)}
           />
          )
        })
      
      }</ul>
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
