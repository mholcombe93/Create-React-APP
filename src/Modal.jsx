//FIRE!!
import Trait from "./Trait";
import modal from "./Modal.css"

function Modal(props) {
  let { name, founder, houseColours, ghost, traits } = props;

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content">
        <div className="modal-body">
          <ul>
            <li>
              <h1> {name} </h1>
              <p>{founder}</p>
              <p>{houseColours}</p>
              <p>{ghost}</p>
              <ul>
                {traits.map((trait) => {
                  return <Trait trait={trait} />;
                })}
              </ul>
            </li>
          </ul>
          <div className="modal-footer">
            <button onClick={props.setShowModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
