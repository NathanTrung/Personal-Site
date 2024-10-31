import React from 'react';
import './css/modal.css'; // Import your CSS for the modal

const Modal = ({ isOpen, onClose, pdfUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <iframe
                    src={'https://docs.google.com/document/d/17Pbi-Xk7vfvOqEW9vTl7renOsFO8U8OD/edit?usp=sharing&ouid=118265820719785767322&rtpof=true&sd=true'}
                    title="Resume"
                    className="modal-pdf"
                />
            </div>
        </div>
    );
};

export default Modal;