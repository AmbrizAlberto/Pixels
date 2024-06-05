// /Login/page.jsx

'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

/* MAIN CSS */
import styles from "./css/main.css";

/* COMPONENTS */
import Navbar from './components/navbar';
import Header from './components/header';
import Posts from './components/posts';


export default function Pixels() {

  const [english, setEnglish] = useState(true); // Set initial state to true for English version

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('No puedes inspeccionar esta página.');
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
      alert('No puedes inspeccionar esta página.');
    }
  });

  return (
    <div className='main'>

{/*       <div className='btnlinks'>
        <button onClick={() => setEnglish(!english)}>
            <i className="bi bi-translate"></i>
        </button>
      </div> */}
  
      {english ? (
        <>
          <Navbar/>
          <Header/>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <Posts/>
        </>
      ) : (
        <>
          <Navbar />
        </>
      )}


      <Head>
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}