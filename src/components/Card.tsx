import "../styles/card.css";
import Champion from "../assets/champion.svg";

interface ICardProps {
  title: string;
  text: string;
}

export default function Card({ title, text }: ICardProps) {
  return (
    <div className="card">
      <img src={Champion} alt="IconePassado" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
