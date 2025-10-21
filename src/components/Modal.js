import "./Modal.css";
import "./Title.css";

function Modal({ children}) {
  return (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: '4px solid',
        borderColor: 'yellowgreen',
        textAlign: 'center'
      }}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
