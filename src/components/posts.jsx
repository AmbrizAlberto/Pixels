// posts.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';

/* IMPORT CSS */
import "../../public/css/posts.css"

/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Posts() {
    return (

      <div className='Posts'>
        <br />
        
        <div className="publis">

          <div className='containerpost'>

            {/* INFO DE USUARIO */}
            <div className='infouser'>
              <div className='imguser'>
                <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="" />
              </div>
              <div className='nameuser'>
                AlDev
              </div>
            </div>

            {/* DIV DE FOTO Y DESCRIPCION */}
            <div className='contain'>
              {/* DERECHA */}
              <div className='photopost'>
                <img src="https://i.pinimg.com/originals/a9/95/63/a995634384bf179509c82723aa748af1.jpg" alt="" />
              </div>
              {/* IZQUIERDA */}
              <div className='photodesc'>
                <h1>Titulo</h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aperiam consequatur quis dolorum, vitae adipisci vel excepturi quas rerum sint molestias molestiae. Beatae minus a id. Iure harum molestias doloribus?</h1>
                <h1>Propiedades</h1>
                <h2><i className="bi bi-camera"></i> Sony</h2>
                <h2><i className="bi bi-fan"></i> f1.2</h2>
              </div>
            </div>

            {/* ABAJO */}
            <div className='postabajo'>
              <div class="resumen">
                <p>10,000 Likes</p>
                <p>10,000 Comentarios</p>
              </div>
              <div class="reactions">
                <button className="btn btn-primary"><i class="bi bi-star"></i></button>
                <button className="btn btn-secondary"><i class="bi bi-chat"></i></button>
              </div>
            </div>

          </div>
        </div>

        <div className="publis">

          <div className='containerpost'>

            {/* INFO DE USUARIO */}
            <div className='infouser'>
              <div className='imguser'>
                <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="" />
              </div>
              <div className='nameuser'>
                AlDev
              </div>
            </div>

            {/* DIV DE FOTO Y DESCRIPCION */}
            <div className='contain'>
              {/* DERECHA */}
              <div className='photopost'>
                <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="" />
              </div>
              {/* IZQUIERDA */}
              <div className='photodesc'>
                <h1>Titulo</h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aperiam consequatur quis dolorum, vitae adipisci vel excepturi quas rerum sint molestias molestiae. Beatae minus a id. Iure harum molestias doloribus?</h1>
                <h1>Propiedades</h1>
                <h2><i className="bi bi-camera"></i> Sony</h2>
                <h2><i className="bi bi-fan"></i> f1.2</h2>
              </div>
            </div>

            {/* ABAJO */}
            <div className='postabajo'>
              <div class="resumen">
                <p>10,000 Likes</p>
                <p>10,000 Comentarios</p>
              </div>
              <div class="reactions">
                <button className="btn btn-primary"><i class="bi bi-star"></i></button>
                <button className="btn btn-secondary"><i class="bi bi-chat"></i></button>
              </div>
            </div>

          </div>
        </div>

        <br />
      </div>

        
        
        
    );
}