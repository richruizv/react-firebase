import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children,handleClose }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button className="closeBtn" onClick={handleClose}>Close modal</button>
      </div>
    </div>
  ), document.body )
}
