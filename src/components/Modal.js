import "./Modal.css"
function Modal(props) {
    // console.log(props)
    return  (
        <div className="modal-backdrop">
            <div className="modal">
                {props.children}
            {/* <h1>Nozima O'rinboyeva Frontend developer💻</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, deserunt?</p> */}
            </div>
        </div>
    )
}

export default Modal