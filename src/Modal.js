import React from 'react'
import ModalCss from './Modal.css'
import HouseComp from "./HP_API"

const Modal = props => {
console.log(props)
  if (!props.show) {
  return null
}

  
  return (
    <div className="modal" onClick = {props.onClose}>
      <div className="modal-content" onClick = { e => e.stopPropagation()}>
        <div className="modal-body">
          
        { house.length > 0 &&
        <HouseComp
          name={house[counter].name}
          founder={house[counter].founder}
          houseColours={house[counter].houseColours}
          ghost={house[counter].ghost}
          traits={house[counter].traits.map((trait) => trait.name)}
        />
      }
          <div className="modal-footer">
            <button onClick={props.onClose} className="button"> Close</button>
</div>
        </div>
      </div>
    </div>
  )
}

export default Modal