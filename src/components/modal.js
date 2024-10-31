import React from 'react';
import './css/modal.css'; // Import your CSS for the modal

const Modal = ({ isOpen, onClose, pdfUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <iframe
                    src={pdfUrl}
                    title="Resume"
                    className="modal-pdf"
                    scrolling="yes" // Allow scrolling within iFrame
                />
            </div>
        </div>
    );
};

export default Modal;
