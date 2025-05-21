import { useEffect, useState } from "react";
import "../styles/hero.css";

import Logo from "../assets/react.svg";
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Button from "./Button";

export default function Hero() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);

  const handleMobileNavClick = () => {
    setIsMenuVisible(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { href: "#", label: "Home" },
    { href: "#solution", label: "Soluções" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#pricing", label: "Preços" },
    { href: "#contact", label: "Contato" },
  ];

  useEffect(() => {
    if (isMenuVisible) {
      setIsMenuMounted(true);
      document.documentElement.style.overflow = "hidden";
    } else {
      // Espera a animação terminar antes de desmontar
      const timeout = setTimeout(() => setIsMenuMounted(false), 300);
      document.documentElement.style.overflow = "auto";
      return () => clearTimeout(timeout);
    }
  }, [isMenuVisible]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // você pode ajustar esse valor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <span className="rectangle left-rectangle desktop-only"></span>
      <span className="rectangle right-rectangle"></span>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="head-div">
          <img src={Logo} alt="Logo" />

          <nav className="nav-links desktop-only">
            <ul className="flex gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="desktop-only">
            <Button secondary text="Cadastre-se" />
          </div>

          <div
            className="mobile-menu-button"
            onClick={() => setIsMenuVisible(true)}
          >
            <img src={Menu} alt="Abrir menu" width={24} height={24} />
          </div>
        </div>

        {isMenuMounted && (
          <div className={`mobile-menu ${isMenuVisible ? "show" : "hide"}`}>
            <div className="container flex justify-evenly items-center">
              <span
                onClick={() => setIsMenuVisible(false)}
                className="close-button"
              >
                <img src={Close} alt="Fechar menu" width={24} height={24} />
              </span>
            </div>
            <nav className="mobile-nav">
              <ul>
                {links.map((link) => (
                  <li key={link.href} onClick={handleMobileNavClick}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
              <div className="mobile-actions">
                <a href="#" className="login-link">
                  Login
                </a>
                <Button secondary text="Cadastre-se" />
              </div>
            </nav>
          </div>
        )}
      </header>

      <section id="hero">
        <div className="container content">
          <p className="highlight">Olá</p>
          <h1>
            Uma solução que irá te entregar<br></br>
            <strong>X</strong>
          </h1>
          <p className="description">
            Você sabe que, para alcançar o sucesso, é
            <span className="highlight-text"> fundamental </span>
            ter parceiros que te impulsionem a ir mais
            <span className="highlight-text"> longe </span>.
          </p>

          <div className="button-group">
            <Button text="Cadastre-se" />
            <Button text="Veja mais" secondary />
          </div>
        </div>
      </section>
    </>
  );
}
