import "../styles/testimonial.css";
import "../styles/globals.css";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  return (
    <section id="testimonials">
      <div className="header-tst">
        <span>
          <p className="desktop-only">Conselho de quem conhece</p>
        </span>
        <h2>Cada cliente importa!</h2>
        <p>
          Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
          aquela ideia de que comida congelada tem de ser algo sem gosto,
          acompanhe abaixo os testemunhos de quem já comprou e aprovou.
        </p>
      </div>
      <section className="carousel">
        <div className="carousel-content">
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
        </div>
      </section>
    </section>
  );
}
