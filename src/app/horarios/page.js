"use client";
import "./style.css";
import { useState } from "react";

export default function Home() {
  const horarios = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00"];
  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const [show, setShow] = useState(false);
  const [agendou, setAgendou] = useState(false);

  const handleLogin = () => {
    if (show) {
      setShow(false);
    }
  };

  const hadleAgendar = () => {
    setShow(true);
    setAgendou(document.querySelectorAll(".horario.selected").length > 0);
  };

  return (
    <div id="tela-inicial" onClick={handleLogin}>
      <div className="cabecalho2" />
      <div className="menuContainer">
        <div className="nomefuncao">
          <p className="nome">edlayne</p>
          <p className="funcao">psicóloga</p>
        </div>
        <div className="menu">
          <div className="menuTexto">
            <a href="tela3" className="menuitem">
              home
            </a>
            <a href="horarios" className="menuitem">
              horários
            </a>
            <a href="consulta" className="menuitem">
              consultas
            </a>
            <a href="contato" className="menuitem">
              contato
            </a>
          </div>
          <div className="logo">
            <a className="menuBotao" href="info">
              <img className="user" src="/img/profile picture.png" />
            </a>
          </div>
        </div>
      </div>
      <p className="titulo">Horários</p>
      {agendou && show && <img className="red" src="/img/agendou.png" />}
      {!agendou && show && <img className="blue" src="/img/nao-agendado.png" />}
      <div id="horarios" className="horarios">
        {dias.map((dia, index) => (
          <div key={index} className="dia">
            {dia}
            {horarios.map((horario, index) => (
              <div
                key={index}
                className="horario"
                onClick={(evt) => evt.target.classList.toggle("selected")}
              >
                {horario}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button id="salvar" onClick={hadleAgendar}>
        Agendar
      </button>
      <img className="tabelaBg" src="/img/bg-tabela.png" />
    </div>
  );
}
