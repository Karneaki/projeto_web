import "../styles/footer.css";

import Logo from "../assets/react.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo e redes sociais */}
        <div className="footer-column">
          <img src={Logo} alt="Logo" />
          <div className="social-icons">
            <img src="/icons/instagram.svg" alt="Instagram" />
            <img src="/icons/facebook.svg" alt="Facebook" />
            <img src="/icons/youtube.svg" alt="YouTube" />
          </div>
        </div>

        {/* Empresa */}
        <div className="footer-column">
          <h2 className="footer-title">Empresa</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Faça parte do time</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Funcionalidades */}
        <div className="footer-column">
          <h2 className="footer-title">Funcionalidades</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Análise de dados</a>
            </li>
            <li>
              <a href="#">Boot discord</a>
            </li>
          </ul>
        </div>

        {/* Recursos */}
        <div className="footer-column">
          <h2 className="footer-title">Recursos</h2>
          <ul className="footer-links">
            <li>
              <a href="#">IOS & Android</a>
            </li>
            <li>
              <a href="#">Teste a Demo</a>
            </li>
            <li>
              <a href="#">Clientes</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Feito na aula do 2º professor mais bala da FAG 💙 ©2025 Karneaki - Todos
          os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
