// Home/page.jsx

"use client"
import { signOut } from 'next-auth/react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import RootLayout1 from "./layout"

/* MAIN CSS */
import styles from "../../../public/css/main.css";

/* COMPONENTS */
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Posts from '../../components/posts';
import Modal from '../../components/modal'; // Importar el nuevo componente Modal

function Pixels() {
  const [english, setEnglish] = useState(true); // Set initial state to true for English version
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para gestionar el modal

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const response = await fetch('/api/posts');
              const data = await response.json();
              setPosts(data);
          } catch (error) {
              console.error('Error fetching posts:', error);
          }
      };
      fetchPosts();
  }, []);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

      <Head>
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}
export default Pixels;
