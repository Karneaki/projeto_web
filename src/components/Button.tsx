import "../styles/button.css";

interface IButtonProps {
  text: string;
  secondary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // adiciona suporte ao tipo do botão
}

export default function Button({ text, secondary, onClick, type = "button" }: IButtonProps) {
  return (
    <button
      className={secondary ? "btn-secondary" : "btn-primary"}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
