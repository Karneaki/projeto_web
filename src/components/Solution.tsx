import Champion from "../assets/champion.svg";
import "../styles/solution.css";
import "../styles/globals.css";

export default function Solution() {
  return (
    <section className="solution" id="solution">
      <header>
        <h2 className="primary">Soluções</h2>
        <div className="desktop-only">
          <h3>Sob medida para você</h3>
        </div>
        <p>
          A <strong className="primary">DonaFrost</strong> já conquistou diversos clientes. Veja
          como podemos te ajudar.
        </p>
      </header>
      <section className="even-columns">
        <div className="card">
          <img src={Champion} alt="Ícone campeão" />
          <div>
            <h3>Produto Vencedor</h3>
            <p>
              Nosso time já venceu eventos como CityFarm da FAG e Startup
              Garage.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Champion} alt="Ícone campeão" />
          <div>
            <h3 className="card-h3">Produto Vencedor</h3>
            <p>
              Nosso time já venceu eventos como CityFarm da FAG e Startup
              Garage.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Champion} alt="Ícone campeão" />
          <div>
            <h3>Produto Vencedor</h3>
            <p>
              Nosso time já venceu eventos como CityFarm da FAG e Startup
              Garage.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
