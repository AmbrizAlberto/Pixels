// components/Modal.jsx

import React from 'react';
import "../../public/css/modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Crear Publicación</h2>
        <form>
          <label htmlFor="photo">Fotografía</label>
          <input type="file" id="photo" name="photo" accept="image/*" required />

          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" rows="4" required></textarea>

          <button type="submit">Publicar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
