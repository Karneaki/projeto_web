import "../styles/solution.css";
import "../styles/globals.css";
import Card from "./Card";

export default function Solution() {
  const cardData = [
    { title: "Primeiro", text: "Texto Massa pra testar os cards" },
    { title: "Segundo", text: "Outro texto maneiro pra ver a diferença" },
    { title: "Terceiro", text: "Mais um texto pra garantir" },
  ];

  return (
    <section className="solution" id="solution">
      <header>
        <h2 className="primary">Soluções</h2>
        <div className="desktop-only">
          <h3>Sob medida para você</h3>
        </div>
        <p>
          A <strong className="primary">DonaFrost</strong> já conquistou
          diversos clientes. Veja como podemos te ajudar.
        </p>
      </header>
      <section className="even-columns">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} text={card.text} />
        ))}
      </section>
    </section>
  );
}
