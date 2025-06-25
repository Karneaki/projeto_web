import React, { useState, FormEvent } from "react";
import Button from "./Button";
import "../styles/globals.css";
import "../styles/contact.css";

async function mailSend(email: string, message: string) {
  try {
    const response = await fetch(
      "https://emaillambdaweb.azurewebsites.net/api/lambdamail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-functions-key":
            "Tv0YlBq8micvruI77mBkYGp3WSQu6Cvpx5w2FyJEiSV_AzFuca6VPw==",
        },
        body: JSON.stringify({
          toMail: email,
          content: message,
        }),
      }
    );

    const result = await response.text;
    alert(`Resposta do servidor: ${result}`);
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    alert("Erro ao enviar e-mail");
  }
}

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !mensagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    await mailSend(email, mensagem);
    setEmail("");
    setMensagem("");
  };

  return (
    <section id="contact" className="container">
      <div className="header-contact">
        <div>Envie sua dúvida</div>
        <h1>Entre em contato</h1>
        <p className="p-contact"> 
          Entre em contato, estamos dispostos a tirar qualquer dúvida,
          seja um orçamento, uma dúvida técnica de algum de nossos produtos.
          Estamos à disposição para responder.😎
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Seu melhor Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="input-big"
          required
        />
        <Button text="Enviar" type="submit"/>
      </form>
    </section>
  );
};

export default ContactForm;
