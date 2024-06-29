// components/Modal.jsx
import React from 'react';
import "../../public/css/modal.css";
import { useRouter } from 'next/navigation';

const Modal = ({ isOpen, onClose }) => {  
  const router = useRouter();

  if (!isOpen) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error('Error al crear la publicación');
      }

      const data = await res.json();
      console.log(data);

      onClose(true);
      router.reload();
    } catch (error) {
      console.error('Error creating post:', error);
      // Manejar el error de manera adecuada en tu aplicación (mostrar mensaje al usuario, etc.)
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Crear Publicación</h2>
        <form onSubmit={onSubmit}>
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
