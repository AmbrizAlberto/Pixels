// header.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';

/* IMPORT CSS */
import "../css/header.css"

/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
    return (
        <div className="header">
          <div className='logohdr'>
            Pixels
          </div>
        </div>
    );
}