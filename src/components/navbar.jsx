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
                  <Link className="logo" style={{ fontSize: "24px", backgroundColor: "transparent", border: "none" }} href="/Home">
                    <span>PX</span>
                  </Link>
                </div>

                <div className="access">
                  <Link className="optionnv" href="/Explore">
                    <i className="bi bi-search-heart-fill"></i>
                    <span>Explorar</span>
                  </Link>
                  <Link className="optionnv" href="/Discussions">
                    <i class="bi bi-chat-left-dots-fill"></i>                    
                    <span>Discusiones</span>
                  </Link>
                  <Link className="optionnv" href="/Home">
                    <i className="bi bi-trophy-fill"></i>
                    <span>Concursos</span>
                  </Link>
                  <Link className="optionnv" href="/Home">
                    <i className="bi bi-gear-wide-connected"></i>
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
    );
}