import React from "react";
import "../css/Modal.css"; // Importa o CSS do modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 
