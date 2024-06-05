// header.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARIES */
import Link from 'next/link';
import { useEffect } from 'react';

/* IMPORT CSS */
import "../css/header.css"
import "../css/modal.css"


/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  useEffect(() => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("modalBtn");
    var span = document.getElementById("closeBtn");
  
    btn.onclick = function () {
      modal.style.display = "block";
    };
  
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    const themeToggleBtn = document.getElementById('theme-toggle-btn-visitor');
    const themeStyleLink = document.getElementById('theme-style-visitor');

    if (themeToggleBtn && themeStyleLink) {
      themeToggleBtn.addEventListener('click', function () {
        if (themeStyleLink.getAttribute('href') === '../css/main.css') {
          themeStyleLink.setAttribute('href', '../css/light-mode.css');
        } else {
          themeStyleLink.setAttribute('href', '../css/main.css');
        }
      });
    }
  }, []);

  return (
    <div className="header">
      <div className='logohdr'>
        Pixels
      </div>
      <div className='btnhead'>
        <button className='imguserhrd'>
          <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="" />
        </button>
        <button id="modalBtn">
          <i className="bi bi-plus-square"></i>
        </button>
        <button id="notificaciones-btn" onclick="toggleMenu()">
          <i class="bi bi-app-indicator"></i>
        </button>
        <a href="/" class="logout"><i class="bi bi-box-arrow-right"></i></a>
      </div>
      

      {/* MODAL CREAR POST */}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" id="closeBtn">&times;</span>
          <h1>NUEVA FOTOGRAFIA</h1>
          <form action="/controllers/Set/SetPost.php" method="post" encType="multipart/form-data">
            <input type="hidden" value="<?php echo $_SESSION['userId']; ?>" name="post_creator_id" />
            <input type="hidden" value="0" name="currentPage" />
            <label htmlFor="tema">Tema:</label>
            <select id="selector" name="post_subgroup_id" required>
              <option value="1">Agua Limpia y Saneamiento</option>
              <option value="3">Energía Asequible y No Contaminante</option>
              <option value="4">Vida Submarina</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
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
    </div>
  );
}
