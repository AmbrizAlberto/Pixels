// components/Modal.jsx
import React from 'react';
import "../../public/css/modal.css";
import { useRouter } from 'next/navigation';

const Modal = ({ isOpen, onClose, session }) => { // Asegúrate de recibir `session`
  const router = useRouter();

  if (!isOpen) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("description", e.target.description.value);
    formData.append("image", e.target.image.files[0]);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${session?.accessToken}`, // Asegúrate de tener el token de sesión aquí si es necesario
        },
      });

      if (!res.ok) throw new Error('Error al crear la publicación');

      const data = await res.json();
      console.log(data);

      onClose();
      router.reload();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Crear Publicación</h2>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="title" required />
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" rows="4" required></textarea>
          <label htmlFor="image">Imagen</label>
          <input type="file" name="image" id="image" accept="image/*" required/>
          <button type="submit">Publicar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
