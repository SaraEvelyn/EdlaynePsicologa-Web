import "./style.css";

export default function Home() {
  return (
    <div id="tela-inicial">
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
            <div id="searchContainer">
              <input
                type="text"
                id="searchInput"
                placeholder="Digite sua pesquisa"
                style={{ display: "none" }}
                onkeypress="searchText(event)"
              />
              <button className="menuBotao" onclick="showSearchInput()">
                <img className="lupa" src="/img/lupa.png" />
              </button>
            </div>
            <a className="menuBotao" href="info">
              <img className="user" src="/img/profile picture.png" />
            </a>
            <button className="menuBotao" onclick="hamburguer()">
              <img className="hamburguer" src="/img/hamburguer.png" />
            </button>
          </div>
        </div>
      </div>
      <div className="aba">
        <div>
          <img className="bgAba" src="/img/bgAba2.png" />
          <p className="sumario">Sumário</p>
          <a href="tela3" id="top1" className="topicosAba">
            tela inicial
          </a>
          <a href="agendamento" id="top2" className="topicosAba">
            Agendamento de Consultas
          </a>
          <a href="podcast" id="top3" className="topicosAba">
            Recursos Educacionais
          </a>
          <a href="historico" id="top4" className="topicosAba">
            Histórico de Consultas
          </a>
          <a href="notificacao" id="top5" className="topicosAba">
            Notificações e Lembretes
          </a>
          <a href="solicitacao" id="top6" className="topicosAba">
            Solicitação de Prescrição
          </a>
        </div>
      </div>
      <div className="transparente" />
    </div>



  );
}
