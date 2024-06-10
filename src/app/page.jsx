import '../../public/css/homepage.css';

function HomePage() {
  return (
    <div className="mhp" href="/auth/login">
      
      <a className='ahp' href="/auth/login">
        <div className="hp">
          <h1 className="Homepage texto-superpuesto">PIXELS</h1>
          <h2>UNETE A LA MEJOR COMUNIDAD DE FOTOGRAFIA</h2>
        </div>
      </a>

      <footer>
        <div className="footer-container">
          <div className="footer-about">
            <h4>Sobre Nosotros</h4>
            <p>Pixels... Mas que fotografia</p>
            <p>La mejor para fotografos</p>
            <p>Al Dev</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="/auth/login">Iniciar Sesión</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Creador:</h4>
            <p>Ambriz Chavez Jose Alberto</p>
          </div>
          <div className="footer-social">
            <h4>Síguenos</h4>
            <ul className="social-icons">
              <li><a href="https://ambrizalberto.github.io/Portfolio/" target="_blank">Portafolio</a></li>
              <li><a href="https://github.com/AmbrizAlberto" target="_blank">Github</a></li>
              <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/alberto-ambriz-chavez/" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Pixels. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
