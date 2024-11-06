'use client';

/* IMPORT PRINCIPAL LIBRARIES */
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

/* IMPORT CSS */
import "../../public/css/header.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

function Header({ onToggleModal }) {
  const router = useRouter();
  const { data: session } = useSession();

  const handleProfileRedirect = () => {
    router.push('/Profile'); // Redirigir a la página del perfil
  };

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
            {/* Perfil */}
            <button className='imguserhrd' onClick={handleProfileRedirect}>
              <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="User" />
            </button>
            {/* Boton subir nueva foto */}
            <button onClick={onToggleModal}>
              <i className="bi bi-plus-square"></i>
            </button>
            {/* Boton notificaciones */}
            <button id="notificaciones-btn" onClick={() => toggleMenu()}>
              <i className="bi bi-app-indicator"></i>
            </button>
            {/* Boton cerrar sesion */}
            <button onClick={() => signOut()} className="logout"><i className="bi bi-box-arrow-right"></i></button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
