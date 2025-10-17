import "./Modal.css";
import "./Title.css";

function Modal({ children, closeModal, isModeModal}) {
  return (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: '4px solid',
        borderColor: isModeModal ? 'yellowgreen' :  'red',
        textAlign: 'center'
      }}>
        {children}
        <button className={isModeModal ? "modal-btn" : ""}  onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
