//FIRE!!
import Trait from "./Trait"

function HouseComp(props) {
  let { name, founder, houseColours, ghost, traits } = props

  return (
  <ul>
      <li>
        <h1> {name} </h1>
        <p>{founder}</p>
        <p>{houseColours}</p>
        <p>{ghost}</p>
        <ul>
        { traits.map((trait) => {
       
          return <Trait trait={trait} /> 
         })}
        </ul>
      </li>
  </ul>
)
}
export default HouseComp