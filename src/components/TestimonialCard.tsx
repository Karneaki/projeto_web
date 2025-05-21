import "../styles/testimonial.css";
import "../styles/globals.css";
import ProfileImageOne from "../assets/profileImageOne.svg";
import Star from "../assets/star.svg";
import StarOuter from "../assets/starOut.svg";

export default function TestimonialCard() {
  return (
    <section className="carousel">
      <div className="carousel-card">
        <img src={ProfileImageOne} alt="Imagem perfil cliente" />
        <span className="testimony">
          <p>
            Certamente o mercado chinês de eletricos está bombando, só existe
            uma coisa melhor do que isso, provar uma boa comida DonaFrost no
            almoço.
          </p>
        </span>
        <span className="rating">
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img
            src={StarOuter}
            alt="ícone estrela sem fundo"
            width={20}
            height={22}
          />
        </span>
        <span className="names">
          <p>Ellon Ma</p>
          <p>CEO BING CHILLING</p>
        </span>
      </div>
    </section>
  );
}
