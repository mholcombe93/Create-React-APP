import React, { useState } from "react";

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
      houseArr = house.map((house) => {
        return {
          name: house.name,
          founder: house.founder,
          colors: house.houseColours,
          founder: house.founder,
          ghost: house.ghost,
          traits: house.traits.map((trait) => trait.name),
        };
      });
      console.log(houseArr);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className="Text">{house}</div>
      <button className="Button" onClick={handleClick}>
        Here is a House
      </button>
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
