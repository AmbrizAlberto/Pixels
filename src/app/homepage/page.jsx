"use client"
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';  // Importa useRouter para redirigir
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Posts from '../../components/posts';
import Modal from '../../components/modal'; // Importar el nuevo componente Modal

function Pixels() {
  const { data: session, status } = useSession();  // Usar useSession para verificar si el usuario está autenticado
  const router = useRouter();  // Para redirigir en caso de que el usuario no esté autenticado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para gestionar el modal
  const [english, setEnglish] = useState(true); // Set initial state to true for English version

  // Redirigir al usuario a la página de login si no está autenticado
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');  // Redirige a login si no está autenticado
    }
  }, [status, router]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (status === 'loading') {
    return <p>Loading...</p>;  // Mostrar un estado de carga mientras se verifica la autenticación
  }

  return (
    <div className='main'>
      {english ? (
        <>
          <Navbar />
          <Header onToggleModal={toggleModal} /> {/* Pasar la función toggleModal al Header */}
          <Posts />
        </>
      ) : (
        <>
          <Navbar />
        </>
      )}

      <Modal isOpen={isModalOpen} onClose={toggleModal} /> {/* Renderizar el Modal */}
    </div>
  );
}

export default Pixels;
