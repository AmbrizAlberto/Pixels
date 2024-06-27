// components/Modal.jsx
'use client'
import React from 'react';
import "../../public/css/modal.css";
import { useRouter } from 'next/navigation';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const router = useRouter();

  const onSubmit = async(e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value

    const res = await fetch ('/api/posts', {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    console.log(data)

    onClose(true)

  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Crear Publicación</h2>
        <form onSubmit={onSubmit}>
          {/* <label htmlFor="photo">Fotografía</label>
          <input type="file" id="photo" name="photo" accept="image/*" required />
 */}
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
