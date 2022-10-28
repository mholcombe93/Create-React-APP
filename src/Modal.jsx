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
              <p>Founder: {founder}</p>
              <p>House Colors: {houseColours}</p>
              <p>House Ghost: {ghost}</p>
              <ul className = "Trait_List"> Traits:
                {traits.map((trait) => {
                  return <Trait trait={trait} />;
                })}
              </ul>
            </li>
          </ul>
          <div className="modal-footer">
            <button className="Return_Button" onClick={props.setShowModal}>Return</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
