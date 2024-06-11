// header.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARIES */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

/* IMPORT CSS */
import "../../public/css/header.css";
import "../../public/css/modal.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  const { data: session } = useSession();

  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("modalBtn");
    const span = document.getElementById("closeBtn");

    if (btn) {
      btn.onclick = function () {
        modal.style.display = "block";
      };
    }

    if (span) {
      span.onclick = function () {
        modal.style.display = "none";
      };
    }

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  return (
    <div className="header">
      <div className='logohdr'>
        Pixels
      </div>
      <div className='btnhead'>
        {!session ? (
          <>
            {/* home */}
            <Link href="/">
              <i className="bi bi-house-door"></i>
            </Link>
            {/* login */}
            <Link className='imguserhrd' href="/auth/login">
              <i className="bi bi-door-open"></i>
            </Link>
          </>
        ) : (
          <>
            <button className='imguserhrd'>
              <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="User" />
            </button>
            <button id="modalBtn">
              <i className="bi bi-plus-square"></i>
            </button>
            <button id="notificaciones-btn" onClick={() => toggleMenu()}>
              <i className="bi bi-app-indicator"></i>
            </button>
            <button onClick={() => signOut()} className="logout"><i className="bi bi-box-arrow-right"></i></button>
            
            <div id="myModal" className="modal">
              <div className="modal-content">
                <span className="close" id="closeBtn">&times;</span>
                <h1>NUEVA FOTOGRAFIA</h1>
                <form action="/controllers/Set/SetPost.php" method="post" encType="multipart/form-data">
                  <input type="hidden" value={session.user.id} name="post_creator_id" />
                  <input type="hidden" value="0" name="currentPage" />
                  <label htmlFor="tema">Tema:</label>
                  <label htmlFor="titulo">Título:</label>
                  <textarea id="titulo" name="post_title" rows="1" required placeholder="Título..."></textarea>
                  <label htmlFor="texto">Texto:</label>
                  <textarea id="texto" name="post_content" rows="4" required placeholder="Descripción..."></textarea>
                  <label htmlFor="foto">Imagen:</label>
                  <input type="file" id="foto" name="image" accept="image/*" />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
