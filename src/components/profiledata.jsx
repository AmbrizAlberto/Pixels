// posts.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';
import '../../public/css/profile.css';

/* IMPORT CSS */


/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ProfileData() {
    return (
        <div className='profiledata'>
            <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="User" />
            <h1>Name</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic, quam praesentium illum modi ipsum, aperiam quae laboriosam, unde officiis distinctio necessitatibus facere voluptas numquam beatae nobis sed. Fugit, omnis.</h2>
        </div>
    );
}