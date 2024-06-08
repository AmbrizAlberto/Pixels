// navbar.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';

/* IMPORT CSS */
import "../../../public/css/navbar.css"

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
                  <a className="optionnv" href="/">
                    <i className="bi bi-house-fill"></i>
                    <span>Feed</span>
                  </a>
                  <a className="optionnv" href="/about">
                    <i className="bi bi-search-heart-fill"></i>
                    <span>Explore</span>
                  </a>
                  <a className="optionnv" href="/">
                    <i className="bi bi-trophy-fill"></i>
                    <span>Contest</span>
                  </a>
                  <a className="optionnv" href="/">
                    <i className="bi bi-person-circle"></i>
                    <span>Perfil</span>
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