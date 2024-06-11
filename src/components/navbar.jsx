// navbar.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';

/* IMPORT CSS */
import "../../public/css/navbar.css"

/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
    return (

        <div className="navbar">
                <div className="logo">
                  <a className="logo" style={{ fontSize: "24px", backgroundColor: "transparent", border: "none" }} href="/">
                    <span>PX</span>
                  </a>
                </div>

                <div className="access">
                  <a className="optionnv" href="/about">
                    <i className="bi bi-search-heart-fill"></i>
                    <span>Explorar</span>
                  </a>
                  <a className="optionnv" href="/">
                    <i className="bi bi-trophy-fill"></i>
                    <span>Concursos</span>
                  </a>
                  <a className="optionnv" href="/">
                    <i class="bi bi-chat-left-dots-fill"></i>                    
                    <span>Discusiones</span>
                  </a>

                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  <a className="optionnv" href="/">
                    <i className="bi bi-gear-wide-connected"></i>
                    <span>Settings</span>
                  </a>
                </div>
              </div>
    );
}